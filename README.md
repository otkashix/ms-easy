# Node
https://www.npmjs.com/package/mseasy

# What does this package do?

This package is an easier way of convert seconds/minutes/days/weeks/months/years to milliseconds

# Installation
`npm i mseasy --save`

# Usage
```js 
const mseasy = require('mseasy');

// Choose what you want to convert to milliseconds. In this case 1 second
mseasy.seconds(1); 
// Result = 1000
```

# Options
seconds => Converts seconds to milliseconds
minutes => Converts minutes to milliseconds
hours => Converts hours to milliseconds
days => Converts days to milliseconds
weeks => Converts weeks to milliseconds
months => Converts months to milliseconds
years => Converts years to milliseconds
