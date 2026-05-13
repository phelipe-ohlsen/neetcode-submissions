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
    reverseList(listNode) {
        if (!listNode) return null;

        let newHead = listNode;
        if (listNode.next) {
            newHead = this.reverseList(listNode.next);
            listNode.next.next = listNode;
        }
        listNode.next = null;


        return newHead;
    }
}
