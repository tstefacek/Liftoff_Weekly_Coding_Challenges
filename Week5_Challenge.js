// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.

function addUp(num) {
  let sum = 0;
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
  return(sum)
}