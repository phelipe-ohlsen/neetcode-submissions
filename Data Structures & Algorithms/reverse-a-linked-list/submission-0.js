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
        let currentNode = listNode,
            prevNode = null;
        
        while (currentNode !== null) {
            const nextIterationNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextIterationNode;
        }

        return prevNode;
    }
}
