// Create a function that generates a random number between a given range

const randomNumber = (min, max) => {
  const data = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(data);
};
randomNumber(10, 20);
