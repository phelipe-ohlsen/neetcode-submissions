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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(listNode) {
        let prevNode = null;

        while (listNode) {
            const nextIterableNode = listNode.next;
            listNode.next = prevNode;
            prevNode = listNode;
            listNode = nextIterableNode; 
        }

        return prevNode;
    }
}
