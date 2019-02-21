function swap(arr,x,y) {
    var t;
    t = arr[x];
    arr[x] = arr[y];
    arr[y] = t;
}

function ArrayList() {
    var array = [55,33,2,76,5,3,65];

    this.mergeSort = function() {
        array = mergeSortRec(array);
        return array.join(',');
    }

    var mergeSortRec = function(array) {
        var length = array.length;
        if (length === 1) {
            return array;
        }

        var mid = Math.floor(length / 2),
            left = array.slice(0,mid),
            right = array.slice(mid,length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    }

    var merge = function(left, right) {
        var result = [];
        il = 0;
        ir = 0;
        while(il < left.length && ir < right.length) {
            if (left[il] < right[il])
                result.push(left[il++]);
            else 
                result.push(right[ir++]);
        }

        while(il < left.length)
            result.push(left[il++]);
        while(ir < right.length)
            result.push(right[ir++]);

        return result;
    }

    this.quickSort = function() {
        quick(array, 0, array.length - 1);
        return array.join(',');
    }

    var quick = function(array, left, right) {
        var index;
        if (array.length > 1) {
            index = partition(array,left,right);

            if (left < index - 1)
                quick(array, left, index - 1);
            
            if (index < right)
                quick(array, index, right);
        }
    }

    var partition = function(array, left, right) {
        var pivot = array[Math.floor((left + right) / 2)],
            i = left;
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