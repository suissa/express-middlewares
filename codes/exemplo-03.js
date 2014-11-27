var express = require('../node_modules/express')
  , app = express();

app.use(function(req, res, next) {
  db.load(function(err, session) {
    if (err) {
      return next(err);
    }
    else if (!session) {
      return next(new Error('no session found'));
    }
    req.session = session;
    next();
  });
});

app.get('/', function(req, res, next) {
  // we can use req.session because middleware HAD to run first
});


app.listen(3000);