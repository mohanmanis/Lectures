/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longestStreak = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!set.has(num - 1)) {
      let len = 0;
      while (set.has(num + len)) {
        len++;
      }
      longestStreak = Math.max(longestStreak, len)
    }
  }
  return longestStreak;
};
