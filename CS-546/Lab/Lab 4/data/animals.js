const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;

const create = async function create(name, animalType) {
    const animalsCollection = await animals();
    let animals = {
        _id: "", 
        name: "",
        animalType: ""
    }
    const insertInfo = await 
}

const getAll = async function getAll() {

}

const get = async function get(id) {

}

const remove = async function remove(id) {

}

const rename = async function rename(id, newName) {

}
