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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        let currNode = dummy;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                currNode.next = list1;
                currNode = currNode.next;
                list1 = list1.next;
            } else {
                currNode.next = list2;
                currNode = currNode.next;
                list2 = list2.next
            }
        }

        if (list1) {
            currNode.next = list1;
        } else {
            currNode.next = list2;
        }

        return dummy.next;
    }
}
