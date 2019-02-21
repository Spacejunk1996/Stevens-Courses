// no check arr.length
const head = function head(Arr) {
    if (Array.isArray(Arr)) {
        if (Arr.length < 1)
            throw "error";
        else 
            return Arr[0];
    }    
    else 
        throw "error";
}

const last = function last(Arr) { 
    if (Arr.length > 0 && typeof(Arr) === 'object')
        return Arr[Arr.length - 1];
    else
        throw "error";
}

const remove = function remove(Arr, index) {
    if (Arr.length > 0 && typeof(Arr) === 'object')
        if (index < Arr.length) {
            Arr.splice(index,1);
            return Arr;
        }
        else 
            throw "error";
    else 
        throw "error";
}

const range = function range(end,value) {
    let Arr = [];

    if (typeof(end) === 'number' && value != undefined) {
        for (let i = 0; i < end; i ++) {
            Arr[i] = value;
        }
        return Arr;
    }
    else if (typeof(end) === 'number' && value == undefined) {
        for (let i = 0; i < end; i ++) {
            Arr[i] = i;
        }
        return Arr;
    }
    else 
        throw "error";

}

const countElements = function countElements(Arr) {
    let result = {};
    if (typeof Arr !== 'object' || Arr.length < 1)
        throw "error";
    for (let i = 0; i < Arr.length; i++) {
        if ((i + 1) < Arr.length && Arr[i] == Arr[i + 1])
            if (Arr[i] in result)
                result[Arr[i]] ++;
            else
                result[Arr[i]] = 2;
        if ((i - 1 >= 0) && (i + 1) < Arr.length && Arr[i] != Arr[i - 1] && Arr[i] != Arr[i + 1])
            result[Arr[i]] = 1;
        if (i == Arr.length - 1 && Arr[i] != Arr[i - 1])
            result[Arr[i]] = 1;
    }
    return result;
}

const isEqual = function isEqual(Arr1, Arr2) {
    if (Array.isArray(Arr1) && Array.isArray(Arr2)) 
        if (Arr1.length > 0 && Arr2.length > 0) {
            if (Arr1.length !== Arr2.length)
                return false;
            for (let i in Arr1) {
                if (Arr1[i] !== Arr2[i])
                    return false;
            }
            return true;
        }
        else 
            throw "error";
    else 
        throw "error";
}

module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
};