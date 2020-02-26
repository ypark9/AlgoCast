// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let retArr = [0];
    let arr = [root, 's'];
    let level = 0; //

    while (arr.length > 1) {
        let node = arr.shift;
        if(node === 's')
        {
            retArr.push(0);
            level ++;
            arr.push('s');
            continue;
        }
        else
            retArr[level] ++; //retArr[retArr.length-1] ++;

        for (let child of node.children) {
            arr.push(child);
        }
    }

    return retArr;
}

module.exports = levelWidth;
