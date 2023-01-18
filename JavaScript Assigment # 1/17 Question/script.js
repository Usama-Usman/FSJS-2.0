// 17. Write a program which tells the number of days in a month.

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
  console.log(`28 days of ${month} in common Year or 29 days of ${month} in Leap Year`);
} else {
  console.log("Invalid month");
}
