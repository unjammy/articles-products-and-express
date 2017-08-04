const Promise = require('promise');

const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./lib/helpers.js');

const home = require('./routes/home.js');
const products = require('./routes/products.js');
const articles = require('./routes/articles.js');

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

app.use('/', home);
app.use('/products', products);
app.use('/articles', articles);

app.listen(3000, function(){
  console.log('express-handlebars server listening on 3000');
});