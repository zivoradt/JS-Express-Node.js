"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const contact_1 = __importDefault(require("../Models/contact"));
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: '' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: '' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: '' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' });
});
router.get('/login', function (req, res, next) {
    res.render('index', { title: 'Login', page: 'login', displayName: '' });
});
router.post('/login', function (req, res, next) {
    res.redirect('/contact-list');
});
router.get('/register', function (req, res, next) {
    res.render('index', { title: 'Register', page: 'register', displayName: '' });
});
router.get('/logout', function (req, res, next) {
    res.render('index', { title: 'Logout', page: 'logout', displayName: '' });
});
router.get('/contact-list', function (req, res, next) {
    contact_1.default.find(function (err, contacts) {
        if (err) {
            return console.error(err);
        }
        console.log(contacts);
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: 'temp' });
    });
});
router.get('/edit/:id', function (req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, (err, contactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: '' });
        }
    });
});
router.post('/edit/:id', function (req, res, next) {
    let id = req.params.id;
    let updateContact = new contact_1.default({
        "_id": id,
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAdress": req.body.EmailAdress
    });
    contact_1.default.updateOne({ _id: id }, updateContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.redirect('/contact-list');
        }
    });
});
router.get('/add', function (req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: '' });
});
router.post('/add', function (req, res, next) {
    let newContact = new contact_1.default({
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAdress": req.body.EmailAdress
    });
    contact_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
});
router.get('/delete/:id', function (req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
});
//# sourceMappingURL=index.js.map