// 09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.


// Truthy values are 
// 1. Any String that is not an empty string
// 2. Any Number except 0
// 3. Object
// 4. true

// Falsy values are
// 1. Empty String
// 2. zero number
// 3. Null
// 4. Undefined 
// 5. Uninitialized variable ( example: const money; )
// 6. false

// First Truthy value
// let money = 1;

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Second Truthy value
// let money = 'hello';

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Third Truthy value
// let money = {};

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Fourth Truthy value
// let money = true;

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// First Falsy value
// let money = 0;

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Second Falsy value
// let money = '';

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Third Falsy value
// let money = null;

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Fourth Falsy value
// let money;

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Fiffth Falsy value
// let money = undefined;

// if(money) {
//     console.log(`Don't spend`);
// } else {
//     console.log('You are poor');
// }

// Sixth Falsy value
let money = false;

if(money) {
    console.log(`Don't spend`);
} else {
    console.log('You are poor');
}
