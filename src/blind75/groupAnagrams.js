// using object
const groupAnagramsVersion2 = (strs) => {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
  //Time Complexity: O(NK \log K)O(NKlogK)
  //Space Complexity: O(NK)O(NK)
};
// using char array of letters instead of sorting --> optimal
var groupAnagrams = function (strs) {
  const wordMap = new Map();
  for (const str of strs) {
    const freqArr = Array(26).fill(0);
    for (const char of str) {
      const index = char.charCodeAt() - "a".charCodeAt();
      freqArr[index]++;
    }
    const key = freqArr.join("#");
    if (!wordMap.has(key)) wordMap.set(key, []);
    wordMap.get(key).push(str);
  }
  return Array.from(wordMap.values());
};
