// Higher Order Function
// Write a function that takes an array of numbers & return a new array with only the even numbers

const input = [5, 13, 4, 8, 9, 10, 6, 16];
const getEvenNumbers = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const res = getEvenNumbers(input);
console.log(res);

//Using Filter();
const mapEvenNums = (arr) => {
  return arr.filter((e) => e % 2 === 0);
};
const res1 = mapEvenNums(input);
console.log(res1);
