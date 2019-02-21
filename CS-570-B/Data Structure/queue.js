function Queue() {

    let items = [];

    this.enqueue = function(elememt) {
        items.push(elememt);
    }

    this.dequeue = function() {
        return itmes.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }

}

let queue = new Queue();
queue.enqueue('John');
queue.enqueue('Bob');

console.log(queue.isEmpty());
console.log(queue.size());

queue.print();
