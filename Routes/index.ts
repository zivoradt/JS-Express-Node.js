import express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About us', page: 'about' });
});

router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services', page: 'services' });
});

router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login' });
});

router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register' });
});

/****************************************Testing******************************************************/


router.get('/contact-list', function(req, res, next) 
{
  res.render('index', { title: 'Contact List', page: 'contact-list' });
});

router.get('/edit', function(req, res, next) 
{
  res.render('index', { title: 'Add', page: 'edit' });
});

router.get('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;
  res.render('edit', { title: 'Edit', page: 'add', contactID: id });
});


module.exports = router;
