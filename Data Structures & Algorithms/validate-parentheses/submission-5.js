class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        for (const char of s) {
            if (closeToOpen[char]) {
                if (!stack.length || stack[stack.length - 1] !== closeToOpen[char]) return false;
                stack.pop();
            } else {
                stack.push(char);
            }
        }


        return !stack.length;
    }
}
