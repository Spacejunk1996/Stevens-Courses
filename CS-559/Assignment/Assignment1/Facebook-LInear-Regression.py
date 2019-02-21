from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import Ridge, Lasso
from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error

# iris = load_iris()
# X = iris.data    
# y = iris.target

# X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=4)
X_train = "Dataset/Training/Features_Variant_1.csv"
X_test = "Dataset/Testing/TestSet/Test_Case_1.csv"
y_train = "Dataset/Training/Features_Variant_2.csv"
y_test = "Dataset/Testing/TestSet/Test_Case_2.csv"
ridge = Ridge(alpha=1)


ridge.fit(X_train, y_train)
y_pred = ridge.predict(X_test)
# print(ridge.score(X_test, y_test))

scores1 = cross_val_score(ridge, X, y, cv=5) #cv = cross validation
# print(scores1)

scores2 = mean_squared_error(y_test,y_pred)
print(scores2)
