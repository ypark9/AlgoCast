// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node){
        this.data = data;
        if (node !== undefined) this.next = null;
        else this.next = node;
    }
}

class LinkedList {
    constructor(node) {
        this.head = null;
    }

    insertFirst(node) {
        this.head = node;
    }

    size(){
        let count = 0;
        let node = this.head;
        if(node !== undefined)
        {
            while(node.next !== undefined) {
                count ++;
                node = node.next;
            }
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        if(node != undefined)
        {
            while(node.next !== undefined) {
                node = node.next;
            }
        }
        return node;
    }

    clear () {
        this.head = null;
    }

    removeFirst() {
        let firstNode = this.head.next;
        this.head = firstNode;
    }

    removeLast (){
        let node = this.head;
        let nodeNext = node.next;
        if(nodeNext != undefined)
        {
            while(nodeNext.next !== undefined) {
                node = nodeNext;
                nodeNext = nodeNext.next;
            }
        }
        return node;
    }

    insertLast(node) {
        let node =this.getLast();
        node.next = node;
    }

    getAt(n) {
        let count = 0;
        let node = this.head;
        while(node.next != undefined){
            node = node.next;
            count ++;
            if(count === n)
            break;
        }

        return node;
    }

    removeAt(n) {
        let node = this.head;
        let nodeNext = node.next;
        let count = 0;
        if(nodeNext != undefined)
        {
            while(nodeNext.next !== undefined) {
                node = nodeNext;
                nodeNext = nodeNext.next;
                count ++;
                if(count === n)
                break;
            }
            node.next = node.next.next;
        }
    }

    insertAt(inserNode, n) {
        let node = this.head;
        let nodeNext = node.next;
        let count = 0;
        if(nodeNext != undefined)
        {
            while(nodeNext.next !== undefined) {
                node = nodeNext;
                nodeNext = nodeNext.next;
                count ++;
                if(count === n)
                break;
            }
            inserNode.next = nodeNext;
            node.next = inserNode;
        }
    }

    forEach(fn) {
        //???
    }
}

module.exports = { Node, LinkedList };
