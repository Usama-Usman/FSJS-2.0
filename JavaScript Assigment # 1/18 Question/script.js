// 18. Write a program which tells the number of days in a month, now consider leap year.

// In leap year, one year is of 366 days only one day of February increases from 28 days to 29 days all the months remain same

const month = "February";

if (
  month === "January" ||
  month === "March" ||
  month === "May" ||
  month === "July" ||
  month === "August" ||
  month === "October" ||
  month === "December"
) {
  console.log(`31 days in ${month}`);
} else if (
  month == "April" ||
  month === "September" ||
  month === "June" ||
  month === "November"
) {
  console.log(`30 days in ${month}`);
} else if (month === "February") {
  console.log(`29 days in ${month}`);
} else {
  console.log("Invalid month");
}
