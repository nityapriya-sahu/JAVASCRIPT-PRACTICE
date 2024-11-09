// Write a function that calculates the factorial of a given number

const factorial = (num) => {
  let count = 1;
  if (num === 0) {
    return num;
  } else if (num === 1) {
    return num;
  } else {
    for (let i = 1; i <= num; i++) {
      count = count * i;
    }
    return count;
  }
};
const res = factorial(3);
console.log(res);
