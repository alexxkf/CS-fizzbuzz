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
  let fizzbuzz = [`${req.params.n}`];
  let result;
  for (let i = 1; i < 99999; i++) {
    if (fizzbuzz % 3 === 0) {
      if (fizzbuzz % 5 === 0) {
        console.log('FizzBuzz');
        result = 'FizzBuzz';
      } else if (fizzbuzz % 3 === 0) {
        console.log('Fizz');
        result = 'Fizz';
      }
    } else if (fizzbuzz % 5 === 0) {
      console.log('Buzz');
      result = 'Buzz';
    } else {
      console.log(i);
    }
  }
  res.send(result);
});

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000);
});

console.log(app);
