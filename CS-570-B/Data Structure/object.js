// let user = new Object();

let user = {
    name: "John",
    age: "30"
};
console.log("type of user: " + typeof(user));
console.log("user's name: " + user.name);
console.log("user's age: " + user.age);
delete user.age;
console.log("user's age: " + user.age);

let admin = user;
admin.name = "Zixu";
console.log(user.name);

function Dictionary () {

    var items = {};

    this.has = function (key) {
        return key in items;
    }

    this.set = function (key, value) {
        items[key] = value;
    }

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items);
    }

    this.values = function () {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.pash(items[k]);
            }
        }
        return values;
    }

}