const extend = function extend (...args) {
    let result = {};
    for (let i in args) {
        let set = args[i];
        if (typeof set != 'object' || set == undefined)
            throw "error";
        // console.log(set);
        for (let j in set) {
            // console.log(j); key
            // console.log(set[j]); value
            if (j in result)
                continue;
            else 
                result[j] = set[j];
        }
    }
    return result;
}

const smush = function smush (...args) {
    let result = {};
    for (let i in args) {
        let set = args[i];
        if (typeof set != 'object' || set == undefined)
            throw "error";
        for (let j in set)
            result[j] = set[j];
    }
    return result;
}

const mapValues = function mapValues (obj, func) {
    let result = {};
    if (typeof obj !== 'object' || obj == undefined || typeof func !== 'function' || func == undefined) {
        throw "error"
    }
    for (let i in obj)
        result[i] = func(obj[i]);
    return result;
}

module.exports = {
    extend,
    smush,
    mapValues
};