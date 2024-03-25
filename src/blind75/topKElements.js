/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn || ((a, b) => a - b);
    this.heap = [];
  }

  getParentIndex = i => Math.floor((i - 1) / 2);
  getLeftChild = i => 2 * i + 1;
  getRightChild = i => 2 * i + 2;
  swap = (i, j) => [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  //  negative  -> valid and positive -> invalid case
  swapNeeded = (parentIndex, childIndex) => this.compareFn(this.heap[parentIndex], this.heap[childIndex]) > 0;


  get peek() {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }


  bubbleUp = index => {
    while (true) {
      const parentIndex = this.getParentIndex(index);
      if (index > 0 && this.swapNeeded(parentIndex, index)) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        return
      }
    }
  }
  enqueue = val => {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleDown = index => {
    while (true) {
      let swapIndex = index;
      const leftChild = this.getLeftChild(index);
      const rightChild = this.getRightChild(index);
      const size = this.size;
      if (leftChild < size && this.swapNeeded(swapIndex, leftChild)) {
        swapIndex = leftChild;
      }
      if (rightChild < size && this.swapNeeded(swapIndex, rightChild)) {
        swapIndex = rightChild;
      }

      if (swapIndex !== index) {
        this.swap(swapIndex, index);
        index = swapIndex;
      } else {
        return;
      }
    }
  }
  dequeue = () => {
    const top = this.peek;
    this.swap(0, this.size - 1);
    this.heap.pop();
    this.bubbleDown(0);
    return top;
  }
  /* 
    Time: O(n), Since we are using bubble down
    We will from backwards because we know most of nodes are there in last level ansd in doing so we will be shifting down less nodes down as most of them are at far end already so bubbledown is prefered over bubbleUp.
    last -> n / 2 nodes
    last - 1 => n / 4 nodes
    ...
    Ist level => 1 node
    we have logn levels as 2 ^ h == Total nodes(n) so, taking log will
    make log2 n == h (height)
    we start from the last level except the leaf nodes because they won't be bubbling down as they don't have any children.
    
  T = 0 * n / 2 + 1 * n / 4 + 2 * n / 8 + ... + log(n - 1) * 1 
  if we write it up further and we use derivative and taylor series then 
  final value will come out as n
  so, T = O(n)
  */
  buildHeap = arr => {
    this.heap = arr;
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

}

// Using Min Heap
var topKFrequent = function (nums, k) {
  if (nums.length <= k) return nums;
  const result = [];
  const freqMap = new Map();
  const heap = new Heap((a, b) => a[1] - b[1]); // [[num, freq], []]
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const [num, freq] of freqMap) {
    heap.enqueue([num, freq]);
    if (heap.size > k) heap.dequeue();
  }

  while (heap.size > 0) result.push(heap.dequeue()[0]); //[]
  return result
};

// Using Max Heap
var topKFrequent = function (nums, k) {
  if (nums.length <= k) return nums;
  const result = [];
  const freqMap = new Map();
  const heap = new Heap((a, b) => b[1] - a[1]); // [[num, freq], []]
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  heap.buildHeap(Array.from(freqMap).map(([num, freq]) => ([num, freq])));
  while (k > 0) {
    result.push(heap.dequeue()[0]);
    k--;
  }
  return result;
};

// using Bucket sort
var topKFrequent = function (nums, k) {
  if (nums.length <= k) return nums;
  const result = [];
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  // [[], [], [], []] --> n + 1
  const bucket = Array(nums.length + 1).fill(null).map(() => ([]));

  for (const [num, freq] of freqMap) {
    bucket[freq].push(num);
  }

  for (let i = bucket.length - 1; result.length < k; i--) {
    for (const num of bucket[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }

};
