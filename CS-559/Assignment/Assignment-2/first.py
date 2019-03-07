import numpy as np

feature1 = []
feature2 = []
feature3 = []

with open('iris-dataset/iris.data.txt') as iris:
    lines = iris.readlines()
    lines.pop()
    for line in lines:
        linedata = line.strip().split(',')
        for i in range(4):
            linedata[i] = float(linedata[i])
        if linedata[4] == 'Iris-setosa':
            feature1.append(linedata[:4])
        elif linedata[4] == 'Iris-versicolor':
            feature2.append(linedata[:4])
        else:
            feature3.append(linedata[:4])

feature1 = np.array(feature1)
feature2 = np.array(feature2)
feature3 = np.array(feature3)

feature1train = feature1[:45, :]
feature1test = feature1[45:, :]
feature2train = feature2[:45, :]
feature2test = feature2[45:, :]
feature3train = feature3[:45, :]
feature3test = feature3[45:, :]


def lda(X, y, testx, testy):
    '''
    X为数据集，y为label
    '''
    label_ = list(set(y))

    X_classify = {}
    for label in label_:
        X1 = np.array([X[i] for i in range(len(X)) if y[i] == label])
        X_classify[label] = X1

    mju = np.mean(X, axis=0)
    mju_classify = {}
    for label in label_:
        mju1 = np.mean(X_classify[label], axis=0)
        mju_classify[label] = mju1
    Sw = np.zeros((len(mju), len(mju)))  # 计算类内散度矩阵
    for i in label_:
        Sw += np.dot((X_classify[i] - mju_classify[i]).T,
                     X_classify[i] - mju_classify[i])
    Sb = np.zeros((len(mju), len(mju)))  # 计算类内散度矩阵
    for i in label_:
        Sb += len(X_classify[i]) * np.dot((mju_classify[i] - mju).reshape(
            (len(mju), 1)), (mju_classify[i] - mju).reshape((1, len(mju))))

    eig_vals, eig_vecs = np.linalg.eig(
        np.linalg.inv(Sw).dot(Sb))  # 计算Sw-1*Sb的特征值和特征矩阵

    sorted_indices = np.argsort(eig_vals)
    topk_eig_vecs = eig_vecs[:, sorted_indices[-1]]# 提取前k个特征向量
    u1 = np.mean(X_classify[1], axis=0)
    u2 = np.mean(X_classify[2], axis=0)
    center_1 = np.dot(topk_eig_vecs.T, u1)
    center_2 = np.dot(topk_eig_vecs.T, u2)
    right, wrong = 0, 0
    for i in range(len(testx)):
        pos = np.dot(topk_eig_vecs.T, testx[i])
        if abs(pos - center_1) < abs(pos - center_2) and testy[i] == 1:
            right += 1
        elif abs(pos - center_1) < abs(pos - center_2) and testy[i] == 2:
            wrong += 1
        elif abs(pos - center_1) > abs(pos - center_2) and testy[i] == 1:
            wrong += 1
        elif abs(pos - center_1) > abs(pos - center_2) and testy[i] == 2:
            right += 1
    return right/len(testy)


pair1 = np.vstack((feature1train,feature2train))
label = [1] * 45 + [2] * 45
pair1test = np.vstack((feature1test,feature2test))
testlabel = [1] * 5 + [2] * 5
print(lda(pair1, label, pair1test, testlabel))







