// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  weave(sourceOne, sourceTwo) {
    const wQ = new Queue();
    var bigger = sourceOne.data.length >= sourceTwo.data.length ? sourceOne.data.length : sourceTwo.data.length;
    
    if (sourceOne.length === 0)
      return sourceTwo;
    if (sourceTwo.length === 0)
      return sourceOne;
    for (let i = 0; i < bigger; i++) {
      if (sourceOne.data[i] !== undefined)
        wQ.add(sourceOne.data[i]);
      if (sourceTwo[i] !== undefined)
        wQ.add(sourceTwo.data[i]);
    }
    return wQ;
    }

    peek() {
      return this.data[this.data.length- 1];
    }
}

module.exports = Queue;
