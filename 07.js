//Create a program that checks if a given year is a leap year.

const checkLeapYear = (year) => {
  return (year % 4 === 0 && year % 400 === 0) || year % 100 !== 0
    ? `${year} is a Leap year`
    : `${year} is not a Leap year`;
};
const res = checkLeapYear(1900);
console.log(res);
