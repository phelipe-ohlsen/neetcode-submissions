class MyLinkedNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        let listNode = this.head,
            i = 0;
        while (i < index) {
            if (listNode == null) return -1;
            listNode = listNode.next;
            i++;
        }

        return listNode ? listNode.val : -1;
    }

    addAtHead(val) {
        if (this.head == null) {
            this.head = new MyLinkedNode(val);
            this.tail = this.head;
        } else {
            const headNode = this.head;
            const newNode = new MyLinkedNode(val, headNode);
            headNode.prev = newNode;
            this.head = newNode;
        }
        this.length += 1;
    }

    addAtTail(val) {
        if (this.tail == null) {
            this.tail = new MyLinkedNode(val);
            this.head = this.tail;
        } else {
            const tailNode = this.tail;
            const newNode = new MyLinkedNode(val, null, tailNode);
            tailNode.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    addAtIndex(index, val) {
        if (index > this.length) return;
        if (index === this.length) {
            this.addAtTail(val);
        } else if (index === 0) {
            this.addAtHead(val);
        } else {
            let listNode = this.head,
            i = 0;
            while (i < index) {
                if (listNode == null) return -1;
                listNode = listNode.next;
                i++;
            }

            const newNode = new MyLinkedNode(val, listNode, listNode.prev);
            listNode.prev.next = newNode;
            listNode.prev = newNode;
            this.length += 1;
        }
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let listNode = this.head,
            i = 0;
        while (i < index) {
            if (listNode == null) return -1;
            listNode = listNode.next;
            i++;
        }

        if (listNode == this.head) {
            const headNode = this.head;
            headNode.next.prev = null;
            this.head = headNode.next;
        } else if (listNode == this.tail) {
            const tailNode = this.tail;
            tailNode.prev.next = null;
            this.tail = tailNode.prev;
        } else {
            listNode.next.prev = listNode.prev;
            listNode.prev.next = listNode.next;
        }
        this.length -= 1;
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