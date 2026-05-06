class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else if (char === ')') {
                const pop = stack.pop();
                if (pop !== '(') return false;
            } else if (char === ']') {
                const pop = stack.pop();
                if (pop !== '[') return false;
            } else if (char === '}') {
                const pop = stack.pop();
                if (pop !== '{') return false;
            }
        }

        return !stack.length;
    }
}
