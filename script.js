const dayDisplayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentDate = new Date();
const dayIndex = currentDate.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = daysOfWeek[dayIndex];
dayDisplayElement.textContent = currentDay;

const utcTimeDisplayElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);
const currentDate1 = new Date();
const utcTimeString = currentDate1.toISOString().substr(11, 8);
utcTimeDisplayElement.textContent = utcTimeString;
