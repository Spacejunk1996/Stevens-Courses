const capitalize = function capitalize (Str) {
    let result;
    if (typeof (Str) == 'string') {
        Str = Str.toLowerCase();
        let arr = Str.split('');
        arr[0] = arr[0].toUpperCase();
        result = arr.join('');
        return result;
    }
    else 
        throw "error";
}

const repeat = function repeat (Str, num) {
    let result = '';
    if (typeof (Str) == 'string') {
        for(let i = 0; i < num; i++) {
            result = result + Str;
        }
        return result;
    }
    else 
        throw "error";
}

const countChars = function countChars (Str) {
    let result = {};
    let arr = Str.split('');
    if (typeof (Str) == 'string') {

        for(let i = 0; i < arr.length; i++) {
            if (arr[i] in result)
                result[arr[i]] ++;
            else
                result[arr[i]] = 1;
        }
        return result;
    }
    else
        throw "error";
}

module.exports = {
    capitalize,
    repeat,
    countChars
}