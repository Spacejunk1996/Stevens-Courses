const people = require("./people");
const weather = require("./weather");
const work = require("./work");



async function main(){
    // try{
    //     const peopledata = await people.getPeople()
    //     console.log (peopledata)
    // }catch(e){
    //     console.log (e);
    // }

    try{
        const getPersonById = await people.getPersonById();
        console.log("pass")
    }catch(error){
        console.log ("fail");
    }

    try{
        const lexIndex = await people.lexIndex(3);
        console.log("pass")
    }catch(error){
        console.log ("fail");
    }

    try{
        const firstNameMetrics = await people.firstNameMetrics(3);
        console.log("pass")
    }catch(error){
        console.log ("fail");
    }

    try{
        const firstNameMetrics = await weather.shouldTheyGoOutside("Scotty", "dd");
        console.log("pass")
    }catch(error){
        console.log ("fail");
    }

    try{
        const whereDoTheyWork = await work.whereDoTheyWork("Scotty", "Barajaz");
        console.log("pass")
    }catch(error){
        console.log ("fail");
    }

    try{
        const whereDoTheyWork = await work.findTheHacker();
        console.log("pass")
    }catch(error){
        console.log ("fail");
    }
}

//call main
main()