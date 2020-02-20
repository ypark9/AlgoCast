// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if(n === 0)
<<<<<<< HEAD
    return 0;
    else if (n === 1)
    return 1;
    else if (n === 2)
    return 1;
    else 
    {
        return fib(n-2) + fib(n-1);
    }
=======
        return 0;
    if(n === 1 || n === 2)
        return 1;
    else
        return fib(n-2) + fib(n -1);
>>>>>>> 33e7e69791ce6d746ab0f6150e299ab2137e058a
}

module.exports = fib;
