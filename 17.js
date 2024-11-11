//Find the largest element from array using 'reduce()' method

const input = [5, 13, 4, 8, 9, 10, 6, 16];
const largestNums = (arr) => {
  return arr.reduce((max, curr) => (curr > max ? curr : max));
};
const res = largestNums(input);
console.log(res);
