with open('iris-dataset/iris.data.txt', 'r') as f:
    data = f.readlines()  
    for line in data:
        odom = line.split(',')       
        numbers_float = map(float, odom) 
        print (numbers_float)
