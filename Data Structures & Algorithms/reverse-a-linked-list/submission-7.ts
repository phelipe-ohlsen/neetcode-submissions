
// class ListNode {
//     constructor(public val: number = 0, public next: ListNode | null = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} listNode
     * @return {ListNode}
     */
    reverseList(listNode: ListNode | null): ListNode {
        if (!listNode) return listNode;

        if (!listNode.next) {
            return listNode;
        }

        const newHead = this.reverseList(listNode.next);
        listNode.next.next = listNode;
        listNode.next = null;

        return newHead;
    }
}
