const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let sum = 0
    for(let i in arr) {
        sum = sum + Math.pow(arr[i], 2)
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if (num <= 1)
        return num;
    else 
        return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let text_arr = text.split("");
    let sum = 0;
    for (let i in text_arr) {
        if (text_arr[i] == 'a' || text_arr[i] == 'e' || text_arr[i] == 'i' || text_arr[i] == 'o' || text_arr[i] == 'u')
            sum ++;
        if (text_arr[i] == 'A' || text_arr[i] == 'E' || text_arr[i] == 'I' || text_arr[i] == 'O' || text_arr[i] == 'U')
            sum ++;
    }
    return sum;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    let result = 1;
    if (num <= -1)
        return NaN;
    if (num <= 1 && num >= 0)
        return 1;
    for (let i = num; i >= 1; i--)
        result = i * result;
    return result;
}

module.exports = {
    firstName: "ZIXU", 
    lastName: "JIANG", 
    studentId: "10441324",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};