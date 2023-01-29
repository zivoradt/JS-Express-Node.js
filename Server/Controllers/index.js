"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessContactPage = exports.ProcessRegisterPage = exports.ProcessLogoutPage = exports.ProcessLoginPage = exports.DisplayRegisterPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router;
const passport_1 = __importDefault(require("passport"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: '' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: '' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: '' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: req.user ? req.user.displayName : '' });
    }
    return res.redirect('/contact-list');
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: req.user ? req.user.displayName : '' });
    }
    return res.redirect('/contact-list');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!req.user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            console.error(err);
            return next(err);
        });
        return res.redirect('/contact-list');
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessLogoutPage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
}
exports.ProcessLogoutPage = ProcessLogoutPage;
function ProcessRegisterPage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessContactPage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
}
exports.ProcessContactPage = ProcessContactPage;
//# sourceMappingURL=index.js.map