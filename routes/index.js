let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
  //res.render('Welcome to My Page');
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'My Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});
module.exports = router;
