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

	size() {
		let count = 0;
		let node = this.head;
		while (node != null) {
			node = node.next;
			count++;
		}
		return count;
	}

	pop() {
		let node, nextNode;
		if (this.size() == 1) {
			node = this.head;
			this.head = null;
			return node;
		}
		node = this.head;
		nextNode = node.next;
		while (nextNode.next !== null) {
			node = nextNode;
			nextNode = nextNode.next;
		}

		node.next = null;
		return nextNode;
	}
}

let list = new LinkedList();
console.log('list', list);
list.head = new Node(10);
list.insertFirst(new Node(9));
console.log('list', list);
list.size();
list.pop();
list.size();
