/* FizzBuzz rules 
FizzBuzz is a function that takes a number up to 5 digits as an argument(N)
and then returns the number. 
Exceptions: 
- for mulitples of 3 return "Fizz"
- for mulitiples of 5 return "Buzz"
- for multiples of 3 & 5 return "FizzBuzz" */

const express = require('express');
// install body-parser to help decode the body from an HTTP request
const bodyParser = require('body-parser');
const app = express();

// configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000);
});

console.log(app);
