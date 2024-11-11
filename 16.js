// Use `map()` to double all the elements in array

const input = [5, 13, 4, 8, 9, 10, 6, 16];

const doubleArray = (arr) => {
  return arr.map((e) => e * 2);
};
const res1 = doubleArray(input);
console.log(res1);
