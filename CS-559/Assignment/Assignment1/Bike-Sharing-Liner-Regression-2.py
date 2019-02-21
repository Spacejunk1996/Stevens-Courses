import csv
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import Ridge, Lasso
from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import KFold
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('./Bike-Sharing-Dataset/day.csv', header=None,sep=',')
# get feature
X = df.iloc[1:,2:14].values
# get label
y = df.iloc[1:,15:].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=4)

# Ridge Regression
ridge = Ridge(alpha=1)
msf = []
kf = KFold(n_splits=5)
kf.get_n_splits(X)
# print(kf)
for train_index, test_index in kf.split(X):
    # print("Train:", train_index, "Validation:",test_index)
    X_train, X_test = X[train_index], X[test_index] 
    y_train, y_test = y[train_index], y[test_index]
    ridge.fit(X_train, y_train)
    y_pred_1 = ridge.predict(X_test)

    valid_acc = mean_squared_error(y_test,y_pred_1)
    msf.append(valid_acc)
print("For Ridge Regression: ")
print("Mean Squared Error per fold: ", msf, "\n")

# Lasso Regression
lasso = Lasso(alpha=1)
msf = []
kf = KFold(n_splits=5)
kf.get_n_splits(X)
# print(kf)
for train_index, test_index in kf.split(X):
    # print("Train:", train_index, "Validation:",test_index)
    X_train, X_test = X[train_index], X[test_index] 
    y_train, y_test = y[train_index], y[test_index]
    lasso.fit(X_train, y_train)
    y_pred_2 = lasso.predict(X_test)
    # valid_acc = lasso.score(X_test,y_test)
    valid_acc = mean_squared_error(y_test,y_pred_2)
    msf.append(valid_acc)
print("For Lasso Regression: ")
print("Mean squared error per fold: ", msf, "\n")

