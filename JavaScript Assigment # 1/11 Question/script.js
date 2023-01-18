// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?

const today = new Date();
console.log(today);
console.log(today.getMonth(), typeof today.getMonth());
console.log(today.getDate(), typeof today.getDate());
console.log(today.getDay(), typeof today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
