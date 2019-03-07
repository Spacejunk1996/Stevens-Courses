# Dear professor,
# I have try my best to figure out a way to solove this problem but I fail.
# I spend whole week to finish this assignment 2 and it was pretty hard to implement these algorighem without import some package or tool.
# Anyway could you publish this problem's code on canvas or github? I really want to know the solution of this problem. Thank you. 
# Zixu Jiang



import numpy as np
import pandas as pd
from csv import reader
import re
import random
# load file
def load_file(fileName1, fileName2):
    dataset = list()
    with open(fileName1, 'r') as file:
        file_reader1 = reader(file)
        for row in file_reader1:
            if not row:
                continue
            dataset.append(row)
    n1 = len(dataset)
    with open(fileName2, 'r') as file:
        file_reader2 = reader(file)
        for row in file_reader2:
            if not row:
                continue
            dataset.append(row)
    n2 = len(dataset)
    return n1,n2,dataset

def textParse(bigString):                                                   
    listOfTokens = re.split(r'\W+', bigString)                              
    return [tok.lower() for tok in listOfTokens if len(tok) > 2]  

# create vacabulary vector list
def createVocabList(dataSet):
    vocabSet = set([])
    for document in dataSet:
        vocabSet = vocabSet | set(document) 
    return list(vocabSet)

def setOfWords2Vec(vocabList, inputSet):
    returnVec = [0] * len(vocabList)                                    
    for word in inputSet:                                
        if word in vocabList:  
            print(word)                                          
            returnVec[vocabList.index(word)] = 1
        # else: print("the word: %s is not in my Vocabulary!" % word)
    return returnVec 

# begin to train naive bayes
def trainNB0(trainMatrix,trainCategory):
    numTrainDocs = len(trainMatrix)
    print("index 0")
    print(len(trainMatrix[0]))
    numWords = len(trainMatrix[0])
    pAbusive = sum(trainCategory)/float(numTrainDocs)
    p0Num = np.ones(numWords);p1Num = np.ones(numWords)
    p0Denom = 2.0;p1Denom = 2.0                  #la smooth
    for i in range(numTrainDocs):
        if trainCategory[i]==1:
            p1Num += trainMatrix[i]
            p1Denom += sum(trainMatrix[i])
        else:
            p0Num += trainMatrix[i]
            p0Denom += sum(trainMatrix[i])
    p1Vect = np.log(p1Num/p1Denom)
    p0Vect = np.log(p0Num/p0Denom)
    # return two sort of condition probability 
    return p0Vect,p1Vect,pAbusive

# beginning to classify naive bayes if p1 = 1 return Jane Austen else return Conan Doyle
def classifyNB(vec2Classify,p0Vec,p1Vec,pClass1):
    p1 = sum(vec2Classify * p1Vec) + np.log(pClass1)
    p0 = sum(vec2Classify * p0Vec) + np.log(1-pClass1)
    if p1 > p0:
        return 0 #"Jane Austen"
    else:
        return 1 #"Conan Doyle"

# load dataset
n,m,dataset = load_file('pg1661.txt','pg31100.txt')
classVec = np.zeros(m)

for i in range(0, len(classVec)):
    if i < n:
        classVec[i] = 0
    else:
        classVec[i] = 1
# store dataset into wordList and data1 data2
docList = []; classList = []; fullText = []
data1 = []; data2 = []                                      
wordList = textParse(open('pg1661.txt', 'r').read())     
docList.append(wordList)
fullText.append(wordList)
data1.append(wordList)
classList.append(1)                                                
wordList = textParse(open('pg31100.txt', 'r').read())      
docList.append(wordList)
fullText.append(wordList)
data2.append(wordList)
classList.append(0)

# print(data1)

ratio = 0.2
vocabList = docList                                    
trainingSet = list(range(50)); testSet = []                                                
for i in range(50):                                                     
    randIndex = int(random.uniform(0, len(data1)/5))                
    testSet.append(data1[randIndex]) 
    testSet.append(data2[randIndex])                             
    del(trainingSet[randIndex])                                         
trainMat = []; trainClasses = [] 

# print (len(trainingSet))
# for docIndex in trainingSet:  
#     print(docList[docIndex])
# print(vocabList)
# print(docList)
for docIndex in range(len(data1)):                                           
    trainMat.append(setOfWords2Vec(docList, docList[docIndex]))       
    trainClasses.append(classList[docIndex])
# print(trainClasses)
p0V, p1V, p = trainNB0(np.array(trainMat), np.array(trainClasses)) 
errorCount = 0    
print()                                                      
for docIndex in testSet:                                                
    # wordVector = setOfWords2Vec(docList, docList[docIndex]) 
    wordVector = trainMat          
    if classifyNB(np.array(wordVector), p0V, p1V, p) != classList[docIndex]:    
        errorCount += 1                                                 

print('Accuracy：%.2f%%' % (1 - (float(errorCount) / len(testSet)) * 100))