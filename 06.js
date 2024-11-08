//Write a function that checks if a number is evan or odd and returns "Even" or "Odd" accordingly

const checkNumber = (num) => {
  //   if (num % 2 === 0) {
  //     return "Even";
  //   } else {
  //     return "Odd";
  //   }

  //OR--

  return num % 2 === 0 ? "Even" : "Odd";
};

const result = checkNumber(101);
console.log(result);
