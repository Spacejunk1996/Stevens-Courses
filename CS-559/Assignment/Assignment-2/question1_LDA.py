import csv
import numpy as np 
import pandas as pd
from matplotlib import pyplot as plt

# load data
def read_data():
    from sklearn.datasets import load_iris
    data_set = load_iris()
    # get data feature
    data = data_set.data
    # get data label
    label = data_set.target + 1
    # print(data_x)
    # print(label)
    return data,label

# calculate the mean of each class
def class_mean(data,label,clusters):
    mean_vectors = []
    for cl in range(1,clusters+1):
        mean_vectors.append(np.mean(data[label==cl,],axis=0))
    return mean_vectors

# calculate the matrix within class
def within_class_SW(data,label,clusters):
    m = data.shape[1]
    # initialize matrix
    S_W = np.zeros((m,m))
    mean_vectors = class_mean(data,label,clusters)
    for cl ,mv in zip(range(1,clusters+1),mean_vectors):
        class_sc_mat = np.zeros((m,m))
        
        for row  in data[label == cl]:
            row ,mv =row.reshape(4,1),mv.reshape(4,1)
            class_sc_mat += (row-mv).dot((row-mv).T)
        S_W +=class_sc_mat
    return S_W

# calculate the matrix between class
def between_class_SB(data,label,clusters):
    m = data.shape[1]
    all_mean =np.mean(data,axis = 0)
    # initialize matrix
    S_B = np.zeros((m,m))
    mean_vectors = class_mean(data,label,clusters)
    for cl ,mean_vec in enumerate(mean_vectors):
        n = data[label==cl+1,:].shape[0]
        mean_vec = mean_vec.reshape(4,1) # make column vector 
        all_mean = all_mean.reshape(4,1) # make column vector
        S_B += n * (mean_vec - all_mean).dot((mean_vec - all_mean).T)
    return S_B

# linear discriminant analtsis
def lda():
    data,label = read_data()
    clusters = 3
    S_W = within_class_SW(data,label,clusters)
    S_B = between_class_SB(data,label,clusters)
    # get eignvalue and eignvector
    eig_vals, eig_vecs = np.linalg.eig(np.linalg.inv(S_W).dot(S_B))

    for i in range(len(eig_vals)):
        eigvec_sc = eig_vecs[:,i].reshape(4,1)
    eig_pairs = [(np.abs(eig_vals[i]), eig_vecs[:,i]) for i in range(len(eig_vals))]
    eig_pairs = sorted(eig_pairs, key=lambda k: k[0], reverse=True)
    W = np.hstack((eig_pairs[0][1].reshape(4,1), eig_pairs[1][1].reshape(4,1)))
    return W

# draw a plot to show threee clusters by lda
def plot():
    data,labels = read_data()
    W = lda()
    Y = data.dot(W)
    #print (Y)
    ax= plt.subplot(111)
    for label,marker,color in zip(range(1,4),('s','^','o'),('blue','red','green')):
        plt.scatter(x=Y[:,0][labels == label], y=Y[:,1][labels == label], marker = marker, color = color, alpha = 1.0,)

    plt.title('Linear Discriminant Analysis')
    plt.show()

# main()
read_data()
lda()
plot()
