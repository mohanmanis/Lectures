/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const len = s.length;
  if (len !== t.length) return false;
  const charMap = new Map();
  for (let i = 0; i < len; i++) {
    const [char1, char2] = [s[i], t[i]];
    charMap.set(char1, (charMap.get(char1) || 0) + 1);
    charMap.set(char2, (charMap.get(char2) || 0) - 1);
  }
  return !Array.from(charMap.values()).some(val => val != 0);
};
