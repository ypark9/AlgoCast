class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(node) {
		let copy = this.head;
		this.head = node;
		node.next = copy;
	}

	Size() {}
}

let list = new LinkedList();
console.log('list', list);
list.head = new Node(10);
list.insertFirst(new Node(9));
console.log('list', list);
