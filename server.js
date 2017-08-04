const Promise = require('promise');

const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./lib/helpers.js');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: helpers,
  partialsDir: [
    'shared/templates/',
    'views/partials/'
  ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Home.'
  });
});

app.get('/test-page', function(req, res) {
  res.render('test-page', {
    title: 'Test.',
    message: 'I am punctuated'
  });
});

app.listen(3000, function(){
  console.log('express-handlebars server listening on 3000');
});