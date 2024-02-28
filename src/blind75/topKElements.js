/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var topKFrequent = function (nums, k) {
  if (nums.length === k) return nums;
  const numsMap = new Map();
  const heap = new PriorityQueue({
    compare: (a, b) => a[1] - b[1]
  });

  // const heap = new Heap((a, b) => a[1] - b[1])

  for (let num of nums) {
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  }

  for (let [number, frequency] of numsMap) {
    heap.enqueue([number, frequency]);
    if (heap.size() > k) heap.dequeue();
  }
  return heap.toArray().map(([a]) => a);
};
