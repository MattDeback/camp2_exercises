/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function fizzBuzz(list) {
  for (let i= 0; i<= 100; i++) {
    if ( i === 0 )
    console.log(0)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else {
       console.log(i);
    }
  }
}

fizzBuzz();
