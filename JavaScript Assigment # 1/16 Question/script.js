// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


const userInput = 'August';

if(userInput === 'September' || userInput === 'October' || userInput === 'November') {
    console.log('The season is Autumn');
} else if (userInput === 'December' || userInput === 'January' || userInput === 'February') {
    console.log('The season is Winter');
} else if(userInput === 'March' || userInput === 'April' || userInput === 'May') {
    console.log('The season is Spring');
} else if(userInput === 'June' || userInput === 'July' || userInput === 'August') {
    console.log('The season is Summer');
} else {
    console.log('Incorrect Entry');
}