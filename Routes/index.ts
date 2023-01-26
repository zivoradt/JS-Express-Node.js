import express from 'express';
export const router = express.Router();

// Contact model
import * as ContactModel from "../Models/contact";
const Contact = ContactModel.Model; //  Contact alias

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', user : '' });
});
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', user : '' });
});

router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About us', page: 'about', user : '' });
});

router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects', page: 'projects', user : ''});
});

router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services', page: 'services', user : '' });
});

router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact', user : ''});
});

// Login page
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login', user : '' });
});

// Logout page
router.get('/logout', function(req, res, next) 
{
  res.render('index', { title: 'Logout', page: 'logout', user : '' });
});

router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register', user : '' });
});

/****************************************Testing******************************************************/


router.get('/contact-list', function(req, res, next) 
{
  //res.render('index', { title: 'Contact List', page: 'contact-list', user : 'admin' });

  Contact.find(function(err, contacts
    ){
      if (err) {
        return console.error(err);
      }
      res.json(contacts);
  });
});

router.get('/edit', function(req, res, next) 
{
  res.render('index', { title: 'Add', page: 'edit', user : 'admin' });
});

router.get('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;
  res.render('edit', { title: 'Edit', page: 'edit', contactID: id, user : 'admin' });
});


//module.exports = router;
