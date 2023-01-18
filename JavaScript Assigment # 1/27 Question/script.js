// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).


for (let i = 0; i <= 100; i++) {
    var isPrime = true;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  if (isPrime === true) {
    console.log(`${i} is a Prime Number`);
  }
}
