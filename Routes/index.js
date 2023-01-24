"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About us', page: 'about' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact' });
});
router.get('/login', function (req, res, next) {
    res.render('index', { title: 'Login', page: 'login' });
});
router.get('/register', function (req, res, next) {
    res.render('index', { title: 'Register', page: 'register' });
});
router.get('/contact-list', function (req, res, next) {
    res.render('index', { title: 'Contact List', page: 'contact-list' });
});
router.get('/edit', function (req, res, next) {
    res.render('index', { title: 'Edit', page: 'edit' });
});
module.exports = router;
//# sourceMappingURL=index.js.map