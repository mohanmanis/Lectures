/* 
https://leetcode.com/problems/valid-parentheses/

*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = []; // keep a count of opening brackets
  const cMap = { ")": "(", "}": "{", "]": "[" };
  for (const char of s) {
    if (!(char in cMap)) {
      stack.push(char);
      // violation
    } else if (stack.pop() !== cMap[char]) {
      return false
    }
  }
  return stack.length === 0;
};
