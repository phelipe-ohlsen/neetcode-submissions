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
        };

        for (const char of s) {
            if (closeToOpen[char]) {
                if (stack.length && closeToOpen[char] === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
