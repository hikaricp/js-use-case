// Merge Array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const attemptToMerge = [array1, array2];
console.log(attemptToMerge); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] 👈 😱

const mergedArray = [
  ...array1,
  ...array2
];

console.log(mergedArray); // [ 1, 2, 3, 4, 5, 6 ] 👈 ✅