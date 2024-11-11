// Remove all occurrences of a specific element

const removeOccurrences = (arr, elementToRemove) => {
  return arr.filter((item) => item !== elementToRemove);
};
const input = [1, 2, 3, 4, 2, 5, 2];
const result = removeOccurrences(input, 2);
console.log(result);
