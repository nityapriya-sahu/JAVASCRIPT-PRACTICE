// recursive function finds the nth Fibonacci number
//EX:
// n = 5 output: 5
//0 1 2 3 5
//n = 8, output: 21
//0 1 2 3 5 8 13 21

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(10));

// FORMULA: fibonacci(n - 1) + fibonacci(n - 2)
