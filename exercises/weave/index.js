// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const wQ = new Queue();
    var bigger = sourceOne.data.length >= sourceTwo.data.length ? sourceOne.data.length : sourceTwo.data.length;
    console.log(bigger);
    
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
    console.log(wQ);
    return wQ;
}

module.exports = weave;
