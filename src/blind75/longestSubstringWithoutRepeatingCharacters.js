/**
 * @param {string} s
 * @return {number}
 */
//using map
var lengthOfLongestSubstring = function (s) {
  let start = 0, end = 0;
  let set = new Set();
  let maxLen = 0;
  while (end < s.length) {
    const newChar = s[end];
    //charMap.set(newChar, (charMap.get(newChar) || 0) + 1);
    // checking of violation
    while (set.has(newChar)) {
      //shrinking
      const leftChar = s[start];
      set.delete(leftChar);
      start++;
    }
    set.add(newChar);
    // valid win len
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};

//using set
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0, end = 0;
  let set = new Set();
  let maxLen = 0;
  while (end < s.length) {
    const newChar = s[end];
    // checking of violation
    while (set.has(newChar)) {
      //shrinking
      const leftChar = s[start];
      set.delete(leftChar);
      start++;
    }
    set.add(newChar);
    // valid win len
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};
