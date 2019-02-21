const axios = require("axios");


async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    // console.log(data);
    return data // this will be the array of people
}

async function getWork() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    // console.log(data);
    return data // this will be the array of work
}

const whereDoTheyWork = async function whereDoTheyWork(firstName, lastName) {
    const Pdata = await getPeople();
    const Wdata = await getWork();

    if (typeof firstName !== 'string' || typeof lastName !== 'string')
        throw "error";

    for (let i in Pdata) {
        let Pset = Pdata[i];
        let ssn_code;
        if (Pset.firstName == firstName && Pset.lastName == lastName) {
            ssn_code = Pset.ssn;
        }

        for (let j in Wdata) {
            let Wset = Wdata[j];
            if (Wset.ssn == ssn_code) {
                let company = Wset.company;
                let job_title = Wset.jobTitle;
                let state = Wset.willBeFired;
                if (state) {
                    // console.log(Pset.firstName + " " + Pset.lastName + " - " + job_title + " at " + company + ". They will be fired");
                    return (Pset.firstName + " " + Pset.lastName + " - " + job_title + " at " + company + ". They will be fired");
                }
                else {
                    // console.log(Pset.firstName + " " + Pset.lastName + " - " + job_title + " at " + company + ". They will not be fired");
                    return (Pset.firstName + " " + Pset.lastName + " - " + job_title + " at " + company + ". They will not be fired");
                }
            }
        }
    }
    throw "error";
}

const findTheHacker = async function findTheHacker(ip) {
    const Pdata = await getPeople();
    const Wdata = await getWork();

    if (typeof ip !== 'string')
        throw "error";

    for (let i in Wdata) {
        let Wset = Wdata[i];
        let IP;
        let ssn_code
        if (ip == Wset.ip) {
            IP = Wset.ip;
            ssn_code = Wset.ssn;
        }

        for (let j in Pdata) {
            let Pset = Pdata[j];
            if (Pset.ssn == ssn_code) {
                // console.log(Pset.firstName + " " + Pset.lastName + " is the Hacker");
                return (Pset.firstName + " " + Pset.lastName + " is the Hacker");
            }
        }
    }
    throw "error";
}

// whereDoTheyWork("Demetra", "Durrand");


module.exports = {
    whereDoTheyWork,
    findTheHacker
}

findTheHacker("79.222.167.180")