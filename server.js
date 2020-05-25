'use strict';

const express = require('express');
const cors = require('cors');
// require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(
  cors({
    origin: ['http://localhost:5000'],
  })
);

//Index page (static HTML)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/new_contact', (req, res) => {
  //regular expression for email matches string *@*
  let testRegex = /.+@.+/;
  const { name, email } = req.body;
  //form validation
  if (!name || !email) {
    console.log('error here');
    return res.json({ error: 'Please fill out required fields' });
  } else if (!testRegex.test(email)) {
    console.log('error regex');
    return res.json({ error: 'Please submit a valid email' });
  } else {
    return res.json({ error: false });
  }
});

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404).type('text').send('Not Found');
});

//Start server
app.listen(5000, function () {
  console.log('Listening on port ' + 5000);
});
