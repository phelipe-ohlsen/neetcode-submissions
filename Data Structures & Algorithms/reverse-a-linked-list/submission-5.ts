/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
 

class Solution {
    /**
     * @param {ListNode} listNode
     * @return {ListNode}
     */
    reverseList(listNode: ListNode | null): ListNode {
        if (!listNode) return null;

        if (listNode.next == null) {
            return listNode;
        }

        const newHead = this.reverseList(listNode.next);

        listNode.next.next = listNode;
        listNode.next = null;

        return newHead;
    }
}
