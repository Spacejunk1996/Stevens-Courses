import csv
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import Ridge, Lasso
from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error

feature = []
flag = True
with open('./Bike-Sharing-Dataset/day.csv', newline='') as csvfile:
    data = csv.reader(csvfile)
    for X in data:
        if flag:
            flag = False
            continue
        temp = []
        for i in range(len(X)):
            if i in [2,5,7,8,10,11,12,15]:
                temp.append(float(X[i]))
        feature.append(temp)

# print(feature)
#season,holiday,workingday,weathersit,atemp,hum,windspeed
feature.remove(feature[0])
feature = np.array(feature)
# print(feature)
X = feature[:,0:6]
y = feature[:,7]
# print(y)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=4)
#print(x[0])
#print(y)
# reg = LassoCV(cv=5).fit(x,y)
# print(reg.score(x,y))
# print(reg.intercept_)
# ridge = Ridge(alpha=1)
# ridge.fit(x, y)

# scores = cross_val_score(ridge, x, y, cv=5) #cv = cross validation
# print(scores)
ridge = Ridge(alpha=1)


ridge.fit(X_train, y_train)
y_pred = ridge.predict(X_test)
# print(ridge.score(X_test, y_test))

scores1 = cross_val_score(ridge, X, y, cv=5) #cv = cross validation
print(scores1)

# scores2 = mean_squared_error(y_test,y_pred)
# print(scores2)


