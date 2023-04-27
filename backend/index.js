const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/addition', (req, res) => {
  const { num1, num2 } = req.body;
  const regex = /^[1-9]\d*$/; 
  if (!regex.test(num1) || !regex.test(num2)) {
    res.status(400).json({ message: 'Invalid input' });
  }
  let carry = 0;
  let carryString = '';
  let sumString = '';
  
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    
    const sum = digit1 + digit2 + carry;
    const digitSum = sum % 10;
    sumString = digitSum + sumString;
    carry = Math.floor(sum / 10);
    carryString = carry + carryString;
  }
  
  if (carry > 0) {
    carryString = carry + carryString;
  }
  
  const result = {};
  for (let i = 1; i <= sumString.length; i++) {
    result[`step${i}`] = {
      carryString: carryString.slice(0, i) + '_',
      sumString: sumString.slice(0, i)
    };
  }
  
  res.json(result);
  
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
