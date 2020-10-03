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

app.get('/fizzbuzz/:n', (req, res) => {
  // request params for number being passed in
  let number = req.params.n;
  let result;
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
    result = 'FizzBuzz';
  } else if (number % 3 === 0) {
    console.log('Fizz');
    result = 'Fizz';
  } else if (number % 5 === 0) {
    console.log('Buzz');
    result = 'Buzz';
  } else {
    console.log(number);
    result = number;
  }

  res.send(result);
});

app.listen(3000, () => {
  console.log('Node.js listening on port ' + 3000);
});

console.log(app);
