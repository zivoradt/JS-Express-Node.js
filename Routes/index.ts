// Express Configuration
import express from 'express';
export const router = express.Router();

// Contact Model
import * as ContactModel from "../Models/contact";
const Contact = ContactModel.Model; // Contact Alias


/* GET home page - with / */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: ''   });
});

/* GET home page - with /home */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: ''    });
});

/* GET about page - with /about */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about', displayName: ''    });
});

/* GET services page - with /services */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services', displayName: ''    });
});

/* GET projects page - with /projects */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Our Projects', page: 'projects', displayName: ''    });
});

/* GET contact page - with /contact */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact', displayName: ''    });
});

/* GET login page - with /login */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login', displayName: ''    });
});

/**This is a temporarry routes for autentification and registration *************************************************/
/* GET login page - with /login */
router.post('/login', function(req, res, next) 
{
  res.redirect('/contact-list');
});


/* GET register page - with /register */
router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register', displayName: ''    });
});

/* GET login page - with /login */
router.get('/logout', function(req, res, next) 
{
  res.render('index', { title: 'Logout', page: 'logout', displayName: ''    });
});


/********************** temporary routes -  contact-list related pages **********************/
/* GET register page - with / contact-list */
router.get('/contact-list', function(req, res, next) 
{
    // db.contacts.find()
    Contact.find(function(err, contacts){
      if(err)
      {
        return console.error(err);
      }
      console.log(contacts);
      res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: 'temp'  });
    });

});

/* Display edit  page - with /edit:id */
router.get('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;

  //---db.contact.find({"_id": id}) and pass it to contactToEdit-----
  Contact.findById(id, {}, {}, (err, contactToEdit)=>{
      if (err) {
        console.error(err);
        res.end(err);
      }
      else {
        // show the edit view
        
        res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: ''});
      }
  } )

}); 

/* Process edit  page - with /edit:id */
router.post('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;

  let updateContact = new Contact({
    "_id": id,
    "FullName" : req.body.FullName,
    "ContactNumber" : req.body.ContactNumber,
    "EmailAdress" : req.body.EmailAdress
  });
  // db.contact.update()
  Contact.updateOne({_id: id}, updateContact, {}, (err)=>{
    if (err) {
      console.error(err);
      res.end(err);
    }
    else {
      
      res.redirect('/contact-list');
    }
  })

});

/* Display add  page - with /add */
router.get('/add', function(req, res, next) 
{
  res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: ''    });
});

/* Process edit  page - with /login */
router.post('/add', function(req, res, next) 
{
  let newContact = new Contact({
    "FullName" : req.body.FullName,
    "ContactNumber" : req.body.ContactNumber,
    "EmailAdress" : req.body.EmailAdress
  });

  Contact.create(newContact, (err)=>{
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.redirect('/contact-list');
  })
}); 

/* Process delete  page - with /delete/:id */
router.get('/delete', function(req, res, next) 
{

  res.redirect('/contact-list');
});