
// 07. Declare an array containing the multiple values and use lastIndexOf to determine 
// the position of the first and last occurrence of a word "pw skills".


const techIndustry = ['lco', 'pw skills', 'ineuron', 'physics wallah', 'pw skills', 'hitesh choudhary', 'anurag tiwari'];

const firstOccurance = techIndustry.indexOf('pw skills');
const lastOccurance = techIndustry.lastIndexOf('pw skills');
console.log(firstOccurance, lastOccurance);