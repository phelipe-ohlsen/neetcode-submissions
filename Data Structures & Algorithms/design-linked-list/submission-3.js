class MyLinkedNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new MyLinkedNode();
        this.tail = new MyLinkedNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0;
    }

    getPrev(index) {
        let currNode;
        if (index <= this.length / 2) {
            currNode = this.head;
            for (let i = 0; i < index; i++) {
                currNode = currNode.next;
            }
        } else {
            currNode = this.tail;
            for (let i = 0; i <= this.length - index; i++) {
                currNode = currNode.prev;
            }
        }
        return currNode;
    }

    get(index) {
        if (index >= this.length || index < 0) return -1;
        return this.getPrev(index).next.val;
    }

    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    addAtTail(val) {
        this.addAtIndex(this.length, val);
    }

    addAtIndex(index, val) {
        if (index > this.length) return;

        const prev = this.getPrev(index);
        const next = prev.next;
        const node = new MyLinkedNode(val, next, prev);
        prev.next = node;
        next.prev = node;

        this.length++;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return;

        const prev = this.getPrev(index);
        const next = prev.next.next;
        prev.next = next;
        next.prev = prev;

        this.length--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */