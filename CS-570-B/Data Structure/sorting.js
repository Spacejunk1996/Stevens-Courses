function swap(arr, x, y) {

    var t;
    t = arr[x];
    arr[x] = arr[y];
    arr[y] = t;

}

function ArrayList() {

    var array = [55,33,2,76,5,3,65];
    
    this.insert = function(item) {
        array.push(item);
    }

    this.toString = function() {
        return array.join('');
    }

    this.bubbleSort = function() {
        var length = array.length;
        for (var i = 0; i < length; i ++) {
            for (var j = 0; j < length - 1; j ++) {
                if (array[j] > array[j + 1])
                    swap(array, j, j + 1)
            }
        }
        return array.join(','); 
    }

    this.reverseBubbleSort = function() {
        var length = array.length;
        var i = 1;
        for (var n = 0; n < length; n ++) {
            if (i % 2 == 1) {
                for (var j = 0; j < length - 1; j ++) {
                    if (array[j] > array[j + 1])
                        swap (array, j, j + 1);
                }
                i ++;
               
            }
            
            if (i % 2 == 0) {
                for (var j = length - 1; j > 0; j --) {
                    if (array[j - 1] > array[j])
                        swap (array, j - 1, j);
                }
                i ++;
                
            }
        }
        return array.join(',');

    }

    this.insertSort = function() {
        var length = array.length;
        var j;
        var temp;
        for (var i = 1; i < length; i++) {
            j = i;
            temp = array[j];
            while (j > 0 && array[j - 1] > temp) {
                swap(arr, j - 1, j)
                j --;
            }
        }
        return array.join(','); 
    }
    
    this.selectionSort = function() {
        var length = array.length;
        var min;
        for (var i = 0; i < length; i++) {
            min = i;
            for (var j = i; j < length; j++) {
                if (array[min] > array[j])
                    min = j;
            }
            if (i !== min)
                swap(array, i, min)
        }
        return array.join(','); 
    }

    this.mergeSort = function() {
        array = mergeSortRec(array);
        return array.join(',');
    }

    var mergeSortRec = function(array) {
        var length = array.length;
        if (length === 1) { // stop condition
            return array;
        }
        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    }

    var merge = function(left, right) {
        var result = [];
        il = 0;
        ir = 0;
        while(il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while(il < left.length) {
            result.push(left[il++]);
        }

        while(ir < right.length) {
            result.push(right[ir++]);
        }
        
        return result;
        
    }

    this.quickSort = function() {
        quick(array, 0, array.length - 1);
        return array.join(',')
    }

    var quick = function(array, left, right) {
        var index;
        if (array.length > 1) {
            index = partition(array, left, right);

            if (left < index - 1) {
                quick(array, left, index - 1);
            }

            if (index < right) {
                quick(array, index, right);
            }
        }
        
    }

    var partition = function(array, left, right) {
        
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;

        while (i <= j) {
            while (array[i] < pivot)
                i++;
            while (array[j] > pivot)
                j--;
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }

        return i;
    }    
}

let array = new ArrayList();
console.log("Bubble sort: " + array.bubbleSort());
console.log("Insert Sort: " + array.insertSort());
console.log("Selection Sort: " + array.selectionSort());
console.log("ReverseBubbleSort: " + array.reverseBubbleSort());
console.log("Merge Sort: " + array.mergeSort());
console.log("Quick Sort: " + array.quickSort());
