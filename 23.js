// Create a counter function using closures that increments and returns the count on each call
// Closures always return inner function & also return a value

function counter() {
  let count = 0;
  return function () {
    return (count += 5);
  };
}
const res = counter();
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
