/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0, right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const currentArea = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, currentArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
