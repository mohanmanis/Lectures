/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [];
  const len = nums.length;
  let product = 1;
  for (let i = 0; i < len; i++) {
    ans[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = len - 1; i > -1; i--) {
    ans[i] = product * ans[i];
    product *= nums[i];
  }
  return ans;
};
