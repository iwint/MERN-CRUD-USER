const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//MiddleWare
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

let user_name = [
  { name: 'Iwin', image: '', description: 'Full Stack Developer' },
  { name: '$Red', image: '', description: 'Full Stack Developer' },
  { name: 'Issac', image: '', description: 'Full Stack Developer' },
];
//Post Method

app.post('/add-user', (req, res) => {
  let body = req.body;
  console.log('Added User', body);

  if (body.name !== '') {
    user_name.push(body);
    res.json(user_name);
  } else {
    res.send('Please Enter the name field');
  }
});
app.get('/users', (req, res) => {
  const response = res.json(user_name);

  return response;
});

app.listen(3000, () => {
  console.log('====================================');
  console.log('Vanakam Da Maplaaa');
  console.log('====================================');
});
