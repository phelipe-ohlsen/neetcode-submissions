class LinkedNode {
    constructor(public val: number = 0, public next: LinkedNode | null = null, public prev: LinkedNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    private size: number;
    private head: LinkedNode;
    private tail: LinkedNode;

    constructor() {
        this.size = 0;
        this.head = new LinkedNode();
        this.tail = new LinkedNode();
    }

    private getPrev(index: number): LinkedNode {
        let currNode: LinkedNode;

        if (index <= this.size / 2) {
            currNode = this.head.next!;
            for (let i = 0; i < index; i++) {
                currNode = currNode.next;
            }
        } else {
            currNode = this.tail.prev!;
            for (let i = 0; i <= this.size - index; i++) {
                currNode = currNode.prev;
            }
        }

        return currNode
    }

    get(index: number): number {
        if (index >= this.size) return -1;
        
        return this.getPrev(index).next!.val;
    }

    addAtHead(val: number): void {
        this.addAtIndex(0 , val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.size, val);
    }

    addAtIndex(index: number, val: number): void {
        const prev = this.getPrev(index);
        const next = prev.next;
        const newNode = new LinkedNode(val, next, prev);
        prev.next = newNode;
        next!.prev = newNode;
        this.size++;
    }

    deleteAtIndex(index: number): void {
        const prev = this.getPrev(index);
        const next = prev.next!.next;
        prev.next = next;
        next!.prev = prev;
        this.size--;
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