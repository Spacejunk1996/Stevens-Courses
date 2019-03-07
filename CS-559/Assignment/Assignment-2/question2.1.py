from random import seed
from random import randrange
from csv import reader
from math import exp
import re


# Load a data file
def load_file(filename):
	dataset = list()
	with open(filename, 'r') as file:
		file_reader = reader(file)
		for row in file_reader:
			# row = row.decode("utf8")
			# row = re.sub("?".format('?'),"1",row)
			# for i in row:
				# if row[i] is '?':
				# 	row[i] = '1'
				# print(row[i])
			# print(row[1].split(','))
			if '?' in row:
				continue
			if not row:
			    continue
			dataset.append(row)
	return dataset
 
# Convert string column to float
def str_column_to_float(dataset, column):
	for row in dataset:
		# if dataset[row] is '?':
		# 	dataset[row] = 1
		row[column] = float(row[column].strip())
 
# Find the min and max values for each column
def dataset_minmax(dataset):
	minmax = list()
	for i in range(len(dataset[0])):
		col_values = [row[i] for row in dataset]
		value_min = min(col_values)
		value_max = max(col_values)
		minmax.append([value_min, value_max])
	return minmax
 
# Rescale dataset columns to the range 0-1
def normalize_dataset(dataset, minmax):
	for row in dataset:
		for i in range(len(row)):
			row[i] = (row[i] - minmax[i][0]) / (minmax[i][1] - minmax[i][0])
 
# Split a dataset into k folds
def cross_validation_split(dataset, n_folds):
	dataset_split = list()
	dataset_copy = list(dataset)
	fold_size = int(len(dataset) / n_folds)
	for i in range(n_folds):
		fold = list()
		while len(fold) < fold_size:
			index = randrange(len(dataset_copy))
			fold.append(dataset_copy.pop(index))
		dataset_split.append(fold)
	return dataset_split
 
# Calculate accuracy percentage
def accuracy_metric(actual, predicted):
	correct = 0
	for i in range(len(actual)):
		if actual[i] == predicted[i]:
			correct += 1
	return correct / float(len(actual)) * 100.0
 
# Evaluate an algorithm using a cross validation split
def evaluate_algorithm(dataset, algorithm, n_folds, *args):
	folds = cross_validation_split(dataset, n_folds)
	scores = list()
	for fold in folds:
		train_set = list(folds)
		train_set.remove(fold)
		train_set = sum(train_set, [])
		test_set = list()
		for row in fold:
			row_copy = list(row)
			test_set.append(row_copy)
			row_copy[-1] = None
		predicted = algorithm(train_set, test_set, *args)
		actual = [row[-1] for row in fold]
		accuracy = accuracy_metric(actual, predicted)
		scores.append(accuracy)
	return scores
 
# Evaluate an algorithm using a cross validation split
def evaluate_algorithm_2_(dataset, algorithm, n_folds, *args):
	folds = cross_validation_split(dataset, n_folds)
	scores = list()
	# b = batch_size
	for fold in folds:
		train_set = list(folds)
		train_set.remove(fold)
		train_set = sum(train_set, [])
		test_set = list()
		for row in fold:
			row_copy = list(row)
			test_set.append(row_copy)
			row_copy[-1] = None
		predicted = algorithm(train_set, test_set, *args, 20)
		actual = [row[-1] for row in fold]
		accuracy = accuracy_metric(actual, predicted)
		scores.append(accuracy)
	return scores

# Make a prediction with coefficients
def predict(row, coefficients):
	yhat = coefficients[0]
	for i in range(len(row)-1):
		yhat += coefficients[i + 1] * row[i]
	return 1.0 / (1.0 + exp(-yhat))
 
# Estimate logistic regression coefficients using stochastic gradient descent
def coefficients_sgd(train, l_rate, n_epoch):
	coef = [0.0 for i in range(len(train[0]))]
	for epoch in range(n_epoch):
		for row in train:
			yhat = predict(row, coef)
			error = row[-1] - yhat
			coef[0] = coef[0] + l_rate * error * yhat * (1.0 - yhat)
			for i in range(len(row)-1):
				coef[i + 1] = coef[i + 1] + l_rate * error * yhat * (1.0 - yhat) * row[i]
	return coef

# Estimate logistic regression coefficients using Mini-Batch gradient descent
def coefficients_mgd(train, l_rate, n_epoch, batch_size):
	coef = [0.0 for i in range(len(train[0]))]
	# for epoch in range(n_epoch):
	for j in range(batch_size):
		for row in train:
			yhat = predict(row, coef)
			error = row[-1] - yhat
			coef[0] = coef[0] + l_rate * error * yhat * (1.0 - yhat)
			# batch_size = 20
			for i in range(len(row)-1):
				coef[i + 1] = coef[i + 1] + l_rate * error * yhat * (1.0 - yhat) * row[i]
	return coef

# Linear Regression Algorithm With Stochastic Gradient Descent
def logistic_regression_sgd(train, test, l_rate, n_epoch):
	predictions = list()
	coef = coefficients_sgd(train, l_rate, n_epoch)
	for row in test:
		yhat = predict(row, coef)
		yhat = round(yhat)
		predictions.append(yhat)
	return(predictions)

# Linear Regression Algorithm With Mini-Batch Gradient Descent
def logistic_regression_mgd(train, test, l_rate, n_epoch, batch_size):
	predictions = list()
	coef = coefficients_mgd(train, l_rate, n_epoch, batch_size)
	for row in test:
		yhat = predict(row, coef)
		yhat = round(yhat)
		predictions.append(yhat)
	return(predictions)
 
# Test the logistic regression algorithm on the diabetes dataset
seed(1)
# load and prepare data
filename = 'brest-cancer-data-set/breast-cancer-wisconsin.data.txt'
dataset = load_file(filename)
# print(dataset)
for i in range(len(dataset[0])):
	str_column_to_float(dataset, i)
# normalize
minmax = dataset_minmax(dataset)
normalize_dataset(dataset, minmax)
# evaluate algorithm
n_folds = 5
l_rate = 0.1
n_epoch = 5
batch_size = 100
scores_sgd = evaluate_algorithm(dataset, logistic_regression_sgd, n_folds, l_rate, n_epoch)
print('Stochastic gradient descent Scores: %s' % scores_sgd)
print('Stochastic gradient descent Mean Accuracy: %.3f%%' % (sum(scores_sgd)/float(len(scores_sgd))))
scores_mgd = evaluate_algorithm_2_(dataset, logistic_regression_mgd, n_folds, l_rate, n_epoch)
print('Mini-Batch gradient descent Scores: %s' % scores_mgd)
print('Mini-Batch gradient descent Mean Accuracy: %.3f%%' % (sum(scores_mgd)/float(len(scores_mgd))))