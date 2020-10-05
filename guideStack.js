// Node for Stack ADT
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNext(next) {
        this.next = next;
    }

    getData() {
        return this.data;
    }

    getNext() {
        return this.next;
    }
}

// Stack ADT. Only insert Node objects! If only JavaScript was like TypeScript and
// had explicit type casting...
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    size() {
        return this.size;
    }

    add(newData) {
        newData.setNext(this.head);
        this.head = newData;
        this.size++;
    }

    remove() {
        var delData = this.head;
        this.head = this.head.getNext();
        this.size--;
        return delData;
    }

    toString() {
        var curr = this.head;
        while (curr != null) {
            console.log(curr.getData());
            curr = curr.getNext();
        }
    }
}