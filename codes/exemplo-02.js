var express = require('../node_modules/express')
  , app = express();

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.get('/', function(req, res, next) {
  res.send('Hello World!');
});

app.get('/help', function(req, res, next) {
  res.send('Nope.. nothing to see here');
});

app.listen(3000);