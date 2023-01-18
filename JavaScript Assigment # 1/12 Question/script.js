// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm


const now = new Date();
const year= now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);
console.log(`${month}-${day}--${year} ${hour}:${minutes}`);