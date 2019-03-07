const axios = require("axios")


async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    // console.log(data);
    return data // this will be the array of people
}

const getPersonById = async function getPersonById(id) {
    const data = await getPeople();
    id = parseInt(id);
    if (typeof id !== 'number' || typeof id === "undefined")
        throw "error";
    for (let i in data) {
        let set = data[i];
        if (set.id == id)
            return set.firstName + set.lastName;
    }
    throw "error";
}

module.exports = {
    getPeople,
    getPersonById
}