const animals = require("./data/animals");
const connection = require("./data/mongoConnection");


const main = async () => {

    const Sasha = await animals.create("Sasha", "Dog");
    console.log(Sasha);
    const Lucy = await animals.create("Lucy", "Dog");
    console.log(Lucy);
    const allAnimals = await animals.getAll();
    console.log(allAnimals);
    const Duke = await animals.create("Duke", "Walrus");
    console.log(Duke);

    const Sashita = await animals.rename(Sasha._id, "Sashita");
    console.log(Sashita);

    await animals.remove(Lucy._id);

    const allanimals = await animals.getAll();
    console.log(allanimals);

    const db = await connection();
    await db.serverConfig.close();
    
    console.log("Done!");
    
}

main().catch(error => {
    console.log(error);
})