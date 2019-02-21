let stack = new Stack();
console.log(stack.isEmpty());
stack.push('1');
stack.push(8);
stack.print();
console.log(stack.peek());

function Stack() {

	let items = [];
	let num = 0;

	this.push = function(num) {
		items.push(num);
	}

	this.pop = function() {
		return items.pop();
	}

	this.peek = function() {
		return items[items.length - 1];
	}

	this.isEmpty = function() {
		return items.length == 0;
	}

	this.size = function() {
		return items.length;
	}

	this.clear = function() {
		items = [];
	}

	this.print = function() {
		console.log(items.toString());
	}

	this.toString = function() {
		return items.toString();
	}

}