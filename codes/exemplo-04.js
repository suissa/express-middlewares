var express = require('../node_modules/express')
  , app = express();

app.use('/users', function(req, res, next) {
  // invoked for any request starting with /users
  next();
});

app.get('/users/daily', function(req, res, next) {});


app.listen(3000);