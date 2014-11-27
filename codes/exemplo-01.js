var express = require('../node_modules/express')
  , app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/help', function(req, res) {
  res.send('Nope.. nothing to see here');
});

app.listen(3000);