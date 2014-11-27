var express = require('../node_modules/express')
  , app = express();

app.get('/', function(req, res) { res.send('hello'); });

app.use(function(req, res, next) {
  next();
});

app.post('/', function(req, res) { res.send('bye'); });


app.listen(3000);