var readlineSync = require('readline-sync');
var readline = require('readline');
var fs = require('fs');
var path = require('path');

// Sync 读取
function readFile() {

    var content = fs.readFileSync('infile.dat','utf8');
    return content;
  
}

//Save File
function saveFile(fileName, arr1, arr2, count_of_bits) {

    fs.writeFileSync(path.join(__dirname, "./" + fileName), "Final Output", function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), "\n\n", function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), "Symbol  Frequency", function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), arr1, function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), "\n\n", function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), "Symbol  Huffman Code", function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), arr2, function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), "\n\n", function (err) {
        if (err) throw err;
    })

    fs.appendFileSync(path.join(__dirname, "./" + fileName), "Total bits: " + count_of_bits, function (err) {
        if (err) throw err;
    })

}

//Filter space or any punctuation
function filter(content) {

    var Str = content.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|]/g,"");
    return Str;

}

//Sort
function sort(array) {

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j ++) {
            if (array[j][1] > array[j + 1][1]) {
                swap(array, 0, j, j + 1);
                swap(array, 1, j, j + 1);
            }
        }
    }

    return array;

}

function swap(array, n, a, b) {

    var temp;
    temp = array[a][n];
    array[a][n] = array[b][n];
    array[b][n] = temp;

}

//build key and weight table
function buildTable(Str) {
    let str = Str;
    var table = function (str) {

        return table;

    }

    //using ASCII code build key and weight table
    this.buildKey = function (i) {
        
        var items = [];
        let num1 = i;
        for (var i  = 0; i < 48; i ++) {
            items[i] = null;
        }  

        for (var j = 48; j <= 122; j++) {
            items[j] = 0;
        }

        for(var k = 0; k < str.length; k++) {
            items[str.charCodeAt(k)] ++;
        }

        var table = new Array();
        for (var y = 0; y < 62; y++) {
            table[y] = new Array();
            for (var x = 0; x < 2; x++) {
                table[y][x] = " ";
            }
        }

        let m = 0;
        for (var num = 48; num <= 122; num++) {
            if ((num >= 91 && num <= 96) || (num >= 58 && num <= 64))
                continue;
            let char = String.fromCharCode(num);
            
            table[m][0] = char;
            m ++;
        }
        m = 0;
        for (var num = 48; num <= 122; num++) {
            if ((num >= 91 && num <= 96) || (num >= 58 && num <= 64))
                continue;
            table[m][1] = items[num];
            m ++;
        }



        //sort
        table = sort(table);

        //console.log(table);

        var key = new Array();
        var weight = new Array();
        for (var i = 0; i < table.length; i ++) {
            key[i] = table[i][0];
            weight[i] = table[i][1];
        }
        //console.log(weight);

        while(weight[0] === 0) {
            key.shift();
            weight.shift();
        }
        //weight = weight.filter(v=>v!=' ');
        //console.log(key);
        if (num1 == 1)
            return key;
        else 
            return weight;
    }

    this.buildWeight = function () {

    }
}


function HuffmanCode () {

    var huffman_tree = null;
    var tmp_code = "";

    // 将字符串转为数组 Transfer string to array
    var buildStrArr = function(str) {
        if(!str) {
            return [];
        }
        else {
            var arr = new Array();
            var len = str.length;
            if(len) {
                for(var i=0; i<len; i++) {
                    arr.push(str[i]);
                }
            }
            return arr;
        }
    }

    this.buildStrArr = function(str) {
        if(!str) {
            return [];
        }
        else {
            var arr = new Array();
            var len = str.length;
            if(len) {
                for(var i=0; i<len; i++) {
                    arr.push(str[i]);
                }
            }
            return arr;
        }
    }

    // 将字符串转换为二进制编码
    this.strToBinary = function(str){
        var binary_str = "";
        if(!str) return binary_str;
        for(var i=0; i<str.length; i++) {
            binary_str += str[i].charCodeAt().toString(2)
        }
        return binary_str
    }

    // 提取字符串中的字符及其权重
    var buildWeightArr = function(str) {
        // weight_arr[0]:字符； weight_arr[1]:权重
        var weight_arr = [[], []];

        // 将字符串转为数组
        var raw_arr = buildStrArr(str);

        // 提取字符串中的字符及其权重
        var len = raw_arr.length;
        if(len) {
            for(var i=0; i<len; i++) {
                var value = raw_arr[i];
                var index = weight_arr[0].indexOf(value);
                if(-1 == index) {
                    var pos = weight_arr[0].push(value);
                    weight_arr[1][pos-1] = 1;
                }
                else {
                    weight_arr[1][index] += 1;
                }
            }
        }
        //console.log("weight_arr: " + weight_arr);
        return weight_arr
    }

    // 对数组进行排序（从小到大）
    var sortArr = function(arr) {
        if(!arr) return [];
        var len = arr[0].length;
        for(var i=0;i<len-1;i++){

            for(var j=0;j<len-1-i;j++){

                var temp1 = arr[1][j];
                var temp2 = arr[1][j+1];

                if(temp1>temp2){

                    tmp = arr[0][j];
                    arr[0][j] = arr[0][j+1];
                    arr[0][j+1] = tmp;

                    tmp = arr[1][j];
                    arr[1][j] = arr[1][j+1];
                    arr[1][j+1] = tmp;
                }
            }
        }
        //console.log(arr);
        return arr
    }

    // 构建Huffman树 build Huffman Tree
    this.bulidHuffmanTree = function(str) {
        // 生成所有字符及权重的数据并按从小到大排序
        var arr = buildWeightArr(str);
        //var array = arr[0];
        arr = sortArr(arr);

        var len = arr[0].length;
        while(len > 2) {
            var vl = arr[0][0];
            var wl = arr[1][0];
            var vr = arr[0][1];
            var wr = arr[1][1];

            arr[0].shift();
            arr[1].shift();
            arr[0][0] = [vl, vr];
            arr[1][0] = wl + wr;

            len = arr[0].length;
            arr = sortArr(arr);
        }
        //console.log(arr[0]);
        return arr[0];
    }

    // 线序遍历 order
    var preOrder = function (node, ch, pos) {
        if (node) {
            if("object" == typeof(node)) {
                preOrder(node[0], ch, pos+"0");
            }
            if(ch == node) {
                // console.log(pos);
                tmp_code = (pos);
                return pos
            }
            if("object" == typeof(node)) {
                preOrder(node[1], ch, pos+"1");
            }
        }
    }

    // 为(单个)字符编码
    var encodeCharByHuffmanTree = function(ch, tree) {
        //var tree = huffman_tree;
        preOrder(tree, ch, "");
        return tmp_code;
    }

    // 为字符数组编码
    this.encodeArrByHuffmanTree = function(arr, tree) {

        let Tree = tree;

        if(!arr) return "";
        var encoded_arr = new Array();
        for(var i=0; i<arr.length; i++) {
            encodeCharByHuffmanTree(arr[i], Tree);
            encoded_arr.push(tmp_code)
        }
        return encoded_arr
    }

    var calculateBit = function (str) {
        let arr = str.split("");
        return arr.length;    
    }

    // 计算单个字符数组的位数
    this.calculateBitOfArr = function(arr, tree) {

        let Tree = tree;

        if(!arr) return "";
        var bit_arr = new Array();
        for(var i=0; i<arr.length; i++) {
            encodeCharByHuffmanTree(arr[i], Tree);
            let bit_num = calculateBit(tmp_code)
            bit_arr.push(bit_num);
        }
        return bit_arr;
    }

}

function main() {
    var huffman = new HuffmanCode();
    var Str = filter(readFile());
    //var Str = "Hello";
    var tree = huffman.bulidHuffmanTree(Str);

    // 根据Huffman树对原始字符串的每个字符进行编码
    var raw_arr = huffman.buildStrArr(Str);
    //console.log("raw_arr: " + raw_arr);
    //raw_arr = ['b'];
    var bt = new buildTable(Str);
    raw_arr = bt.buildKey(1);

    var raw_weight = bt.buildKey(2);

    var encoded_arr = huffman.encodeArrByHuffmanTree(raw_arr, tree);
    var bit_arr = huffman.calculateBitOfArr(raw_arr, tree);

    var sum = 0;
    var bits_amount = 0
    var count_of_bits = 0;
    for(var i = 0; i < raw_weight.length; i ++) {
        sum = sum + raw_weight[i];
    }

    for(var i = 0; i < raw_weight.length; i++) {
        bits_amount = raw_weight[i] * bit_arr[i];
        count_of_bits += bits_amount;
    }


    var frequencyTable = new Array();
        for (var y = 0; y < raw_arr.length; y ++) {
            frequencyTable[y] = new Array();
            for (var x = 0; x < 2; x ++) {
                frequencyTable[y][x] = " ";
            }
        }

    for (var y = 0; y < raw_weight.length; y++) {
        frequencyTable[y][0] = "\n" + raw_arr[y];
    }

    for (var y = 0; y < raw_weight.length; y++) {
        var num = (raw_weight[y] / sum) * 100;
        num = num.toFixed(2);
        frequencyTable[y][1] = num + "%";
    }

    var huffmanCodeTable = new Array();
    for (var y = 0; y < raw_arr.length; y ++) {
        huffmanCodeTable[y] = new Array();
        for (var x = 0; x < 2; x ++) {
            huffmanCodeTable[y][x] = " ";
        }
    }

    for (var y = 0; y < raw_arr.length; y ++) {
        huffmanCodeTable[y][0] = "\n" + raw_arr[y];
    }

    for (var y = 0; y < raw_arr.length; y ++) {
        huffmanCodeTable[y][1] = encoded_arr[y];
    }

    saveFile("outfile.dat", frequencyTable, huffmanCodeTable, count_of_bits);
}

main();
