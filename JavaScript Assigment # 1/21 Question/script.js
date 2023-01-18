// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist  add to the countries list.


const countries = ['Africa', 'Europe', 'Saudia Arabia', 'UAE', 'England', 'Pakistan', 'India'];
// const countries = ['Africa', 'Europe', 'Saudia Arabia', 'UAE','Ethiopia', 'England', 'Pakistan', 'India'];

if(countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia')
    console.log(countries)
}