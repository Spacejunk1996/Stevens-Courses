// const axios = require('axios');

// async function getWeather(){
//     const {data} = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
//     return data;
//     //console.log(weatherData);
// }

// async function getPeople(){
//     const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
//     return data;
//     //console.log(peopleData);
// }


// async function shouldTheyGoOutside(firstName, lastName) {
//     const weatherData = await getWeather();
//     const peopleData = await getPeople();

//     if (typeof firstName != 'string' || typeof lastName != 'string') {
        
//         // throw "error";
//     } 
//         for (let i in peopleData) {
//             let peopleObj = [];

//             let matchedZip = [];
//             peopleObj = peopleData[i];
//             // console.log(peopleObj)
//             if(firstName != peopleObj.firstName || lastName != peopleObj.lastName)
//                 continue;
//                 // throw "error";

//             matchedZip = peopleObj.zip;
//             for (let j in weatherData) {
//                 let weatherObj = weatherData[j];
//                 if (weatherObj.zip == matchedZip) {
//                     let matchedTemp = [];
//                     matchedTemp = weatherObj.temp;
//                     if (matchedTemp >= 34) {
//                         return "Yes, " + firstName + " should go outside.";
//                         // console.log("Yes, " + firstName + " should go outside.");
//                     } else {
//                         return "No, " + firstName + " should not go outside.";
//                         // console.log("No, " + firstName + " should not go outside.");
//                     }
//                 }
//             }
//         }
//         // throw "error";
    

// }

// shouldTheyGoOutside("Calli", "Ondrasek");

// module.exports = {
//     shouldTheyGoOutside
// }


const axios = require("axios");


async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    // console.log(data);
    return data // this will be the array of people
}

async function getWeather() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    // console.log(data);
    return data // this will be the array of weather
}

const shouldTheyGoOutside = async function shouldTheyGoOutside(firstName, lastName) {
    const Pdata = await getPeople();
    const Wdata = await getWeather();
    if (typeof firstName !== 'string' || typeof lastName !== 'string')
        throw "error";
        
    for (let i in Pdata) {
        let Pset = Pdata[i];
        let zip_code;
        if (Pset.firstName == firstName && Pset.lastName == lastName) {
            zip_code = Pset.zip;
        }
        for (let j in Wdata) {
            let Wset = Wdata[j];
            if (Wset.zip == zip_code) {
                let temp = Wset.temp;
                if (temp >= 34) {
                    // console.log("Yes, " + Pset.firstName + " " + Pset.lastName + " should go outside")
                    return ("Yes, " + Pset.firstName + " " + Pset.lastName + " should go outside");
                }
                else {
                    // console.log("No, " + Pset.firstName + " " + Pset.lastName + " should not go outside")
                    return ("No, " + Pset.firstName + " " + Pset.lastName + " should not go outside");
                }
            }
        }
    }
    throw "error";
}

module.exports = {
    shouldTheyGoOutside
}