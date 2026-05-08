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
    reverseList(head) {
        let currNode = head;
        let prevNode = null;
        
        while (currNode) {
            const nextIterationNode = currNode.next;

            currNode.next = prevNode;
            prevNode = currNode;
            
            currNode = nextIterationNode;
        }

        return prevNode;
    }
}
