//Find the sum of all elements in an array

const input = [4, 2, 6, 5, 1];
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
const res = sumArray(input);
console.log(res);

//OR--
const sumArray1 = input.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray1);
