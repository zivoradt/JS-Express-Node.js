"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const ContactModel = __importStar(require("../Models/contact"));
const Contact = ContactModel.Model;
exports.router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
exports.router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
exports.router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: '' });
});
exports.router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: '' });
});
exports.router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: '' });
});
exports.router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' });
});
exports.router.get('/login', function (req, res, next) {
    res.render('index', { title: 'Login', page: 'login', displayName: '' });
});
exports.router.post('/login', function (req, res, next) {
    res.redirect('/contact-list');
});
exports.router.get('/register', function (req, res, next) {
    res.render('index', { title: 'Register', page: 'register', displayName: '' });
});
exports.router.get('/logout', function (req, res, next) {
    res.render('index', { title: 'Logout', page: 'logout', displayName: '' });
});
exports.router.get('/contact-list', function (req, res, next) {
    Contact.find(function (err, contacts) {
        if (err) {
            return console.error(err);
        }
        console.log(contacts);
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: 'temp' });
    });
});
exports.router.get('/edit/:id', function (req, res, next) {
    let id = req.params.id;
    Contact.findById(id, {}, {}, (err, contactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: '' });
        }
    });
});
exports.router.post('/edit/:id', function (req, res, next) {
    let id = req.params.id;
    let updateContact = new Contact({
        "_id": id,
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAdress": req.body.EmailAdress
    });
    Contact.updateOne({ _id: id }, updateContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.redirect('/contact-list');
        }
    });
});
exports.router.get('/add', function (req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: '' });
});
exports.router.post('/add', function (req, res, next) {
    let newContact = new Contact({
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAdress": req.body.EmailAdress
    });
    Contact.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
});
exports.router.get('/delete/:id', function (req, res, next) {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
});
//# sourceMappingURL=index.js.map