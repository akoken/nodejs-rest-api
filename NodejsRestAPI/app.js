var express = require('express');
var passport = require('passport');
var logger = require('morgan');
var bodyParser = require('body-parser');
var basicStrategy = require('passport-http').BasicStrategy;
var products = require('./routes/products.js');

//Passport configuration
passport.use(new basicStrategy(
  function(username,password,done)
  {
    if(username.valueOf() === 'admin' &&
       password.valueOf() === 'password')
       return done(null, true);
       else
         return done(null, false);
  }
));

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(passport.initialize());

//Routes
app.get('/api/v1/products', passport.authenticate('basic', {session:false}), products.getAll);

//Start the server
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function()
{
  console.log('Server is running on port:' + server.address().port);
})
