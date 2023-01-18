// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const sortAges = ages.sort();
// console.log(sortAges);

// Find max and min in an Array
// let max = 0;
// let min = 50;

// for (let i = 0; i < sortAges.length; i++) {
//   if (sortAges[i] > max) {
//     max = sortAges[i];
//   } else if (min > sortAges[i]) {
//     min = sortAges[i];
//   }
// }

// console.log(max);
// console.log(min);



// Find median value in an array

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const sortAges = ages.sort();
// console.log(sortAges);

// let median;

// if (sortAges.length % 2 !== 0) {
//   let middleIndex = arr.length / 2;
//   median = sortAges[middleIndex];
// } else {
//   let middleIndex = sortAges.length / 2;
//   median = (sortAges[middleIndex] + sortAges[middleIndex - 1]) / 2;
// }

// console.log(median);

// Find the Average age

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const sortAges = ages.sort();
// //  console.log(sortAges);

// let sum = 0;
// for (let i = 0; i < sortAges.length; i++) {
//   sum += sortAges[i];
// }

// let average = sum / sortAges.length;

// console.log(average);
