var express = require('../node_modules/express')
  , app = express();

app.use('/users', function(req, res, next) {
  // req.path will be the req.url with the /users prefix stripped
  console.log('%s', req.path);
  next();
});


app.listen(3000);