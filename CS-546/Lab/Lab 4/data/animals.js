const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;

const getAnimalById = async function getAnimalById(id) {
    if (!id) throw "You must provide an id to serch for";
    const animalsCollection = await animals();
    const animalsId = await animalsCollection.findOne({ _id:id });
    if (animalsId === null) throw "No animal with that id";
    return animalsId;
}

const create = async function create(name, animalType) {
    // console.log("begain to create");
    const animalsCollection = await animals();
    let anim = {
        name: name,
        animalType: animalType
    };
    
    const insertInfo = await animalsCollection.insertOne(anim);
    if (insertInfo.insertCount === 0) throw "Could not add animal";

    const newId = insertInfo.insertedId;
    const animal = await getAnimalById(newId);
    // console.log(animal);
    return animal;
    
}

const getAll = async function getAll() {
    const animalsCollection = await animals();
    const animal = await animalsCollection.find().toArray();
    return animal;
}

const get = async function get(id) {
    const animalsCollection = await animals();
    const animalsid = await animalsCollection.findOne({_id: id});
    if (animalsid == null) throw "No animal with that id";
    return animalsid;
}

const remove = async function remove(id) {
    if (!id) throw "You must provide an id for serch for";

    const animalsCollection = await animals();
    const deletionInfo = await animalsCollection.removeOne({ _id: id});

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete animal with id of ${id}`;
    }
    
}

const rename = async function rename(id, newName) {
    if (!id) throw "You must provide an id to search for";
    if (!newName) throw "You must provide a name for an anmial";

    const animalsCollection = await animals();
    const updatedAnimal = { $set: {name: newName } };
    const updateInfo = await animalsCollection.updateOne({ _id: id }, updatedAnimal);
    
    if (updateInfo.modifiedCount === 0) {
        throw "Could not update animal successfully";
    }
    return await getAnimalById(id);
}

module.exports = {
    create,
    getAll,
    get,
    remove,
    rename
}