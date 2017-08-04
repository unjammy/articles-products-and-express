var express = require('express');
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.render('home', {
    title: 'Home.'
  });
});

router.get('/test-page', function(req, res) {
  res.render('test-page', {
    title: 'Test.',
    message: 'I am punctuated'
  });
});

module.exports = router;