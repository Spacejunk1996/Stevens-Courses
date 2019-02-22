const axios = require("axios")


async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    // console.log(data);
    return data // this will be the array of people
}

const getPersonById = async function getPersonById(id) {
    const data = await getPeople();
    if (typeof id !== 'number' || typeof id === "undefined")
        throw "error";
    for (let i in data) {
        let set = data[i];
        if (set.id == id)
            return set.firstName + set.lastName;
    }
    throw "error";
}

const lexIndex = async function lexIndex(index) {
    const data = await getPeople();
    const lastName = [];
    if (typeof index !== 'number')
        throw "error";
    for (let i in data) {
        let set = data[i];
        lastName.push(set.lastName);
    }
    lastName.sort();
    for (let i in data) {
        let set = data[i];
        if (set.lastName == lastName[index])
            return set.firstName + set.lastName;  
    }
    throw "error";
}

const firstNameMetrics = async function firstNameMetrics() {
    const data = await getPeople();
    let result = {}
    let totalLetters = 0;
    let totalVowels = 0;
    let totalConsonants = 0;
    let longestName = "";
    let shortestName = "";
    let firstName = [];

    for (let i in data) {
        let set = data[i];
        firstName.push(set.firstName);
    }

    let long = 0;
    let short = 100;
    for (let i in firstName) {
        let num = [];
        num = firstName[i].split("");
        if (num.length > long) {
            long = num.length;
            longestName = firstName[i];
        }
        if (num.length < short) {
            short = num.length;
            shortestName = firstName[i];
        }
        totalLetters = totalLetters + num.length;
        for (let j in num) {
            if (num[j] == 'a' || num[j] == 'e' || num[j] == 'i' || num[j] == 'o' || num[j] == 'u' || num[j] == 'A' || num[j] == 'E' || num[j] == 'I' || num[j] == 'O' || num[j] == 'U') {
                totalVowels ++;
            }
            else 
                totalConsonants ++;
        }
    }

    result.totalLetters = totalLetters;
    result.totalVowels = totalVowels;
    result.totalConsonants = totalConsonants;
    result.longestName = longestName;
    result.shortestName = shortestName;
    console.log(result);
    return result;
}

module.exports = {
    getPersonById,
    lexIndex,
    firstNameMetrics
}
firstNameMetrics()