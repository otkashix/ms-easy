# ms-easy
Convert seconds/minutes/hours/days/weeks/months/years to milliseconds with a simple line!
# Installation
```
npm i mseasy
```
# Example
```js
const mseasy = require('mseasy');

// time to milliseconds
console.log(mseasy.seconds(1)); // 1000 milliseconds
console.log(mseasy.minutes(1)); // 60000 milliseconds
console.log(mseasy.hours(1)); // 3600000 milliseconds
console.log(mseasy.days(1)); // 86400000 milliseconds
console.log(mseasy.weeks(1)); // 604800000 milliseconds
console.log(mseasy.months(1)); // 2.6280E+9 milliseconds
console.log(mseasy.years(1)); // 3.1536E+10 milliseconds

// milliseconds to time
console.log(mseasy.ms((3.1536E+10 * 2) + 2.6280E+9 + (604800000 * 3) + (86400000 * 10))) // 2yy, 2 mm, 13 h, 59m, 59s

// milliseconds to date
console.log(mseasy.date(Date.now())) // Will show the current date as dd/mm/yy, hour:min
```
