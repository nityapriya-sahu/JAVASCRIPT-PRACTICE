//Write a function that takes a string & return the reverse version of it.

let string = "Nitya";
function reverseString() {
  let result = string.split("").reverse().join("");
  console.log(result);
}
reverseString();

//OR--

//Using for loop

const forLoopReverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
};

const result1 = forLoopReverseString("hello world");
console.log(result1);

//OR--
//Using Recursion

//FIXED LATER
// function recursionReverseString(str) {
//   console.log("HHHHHHH");

//   if (str === "") return "";
//   else return recursionReverseString(str.substr(1)) + str.charAt(0);
// }
// recursionReverseString("hello");
