const express = require('express');
const app = express();
const PORT = 8000;

app.use(logger);

app.get('/', (req, res) => {
  console.log('Home works');
  res.send('Home Page');
});

app.get('/users', auth, (req, res) => {
  console.log('users works');
  res.send('Users Page');
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

function auth(req, res, next) {
  if (req.query.admin === 'true') {
    next();
  } else {
    res.send('No auth');
  }
}

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server start on PORT`);
});
