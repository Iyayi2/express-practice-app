const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  res.send('<h1>Here you find the users page</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>This is the home page</h1>');
});

app.listen(3000);
