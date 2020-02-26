// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    insert(data) {
        if (data < this.data)
            this.insert(data, this.left);
        else if (data > this.data)
            this.insert(data, this.left);
        else
            return -1;

        if (data < this.data)
            this.left = new Node(data);
        else
            this.right = new Node(data);
    }

    insert(data, node){
        if(node !== undefined)
            return;
        if (data < node.data)
            insert(data, node.left);
        else if (data > node.data)
            insert(data, node.left);
        else
            return;

        if (data < node.data)
            node.left = new Node(data);
        else
            node.right = new Node(data);
    }
}

module.exports = Node;
