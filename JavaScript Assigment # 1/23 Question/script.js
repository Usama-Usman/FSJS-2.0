// 23. Write a program to check that the number given by the user is a prime number or not.

const userInput = 9;
let isPrime = true;

for (let i = 2; i < userInput; i++) {
  if (userInput % i === 0) {
    isPrime = false;
  }
}
if (isPrime === true) {
  console.log(`${userInput} is a Prime Number`);
} else {
  console.log("Not a Prime Number!");
}
