


/* 

        2
      /   \
     5     7
    /
   

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

}


const heap = new Heap((a, b) => b - a);
heap.enqueue(5);
heap.enqueue(7);
heap.enqueue(1);
heap.enqueue(9);

console.log(heap.peek); // 1
heap.dequeue();
console.log(heap.peek); // 5
