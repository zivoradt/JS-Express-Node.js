"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.ProcessContatListPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContatListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
const index_1 = require("../Util/index");
function DisplayContatListPage(req, res, next) {
    contact_1.default.find(function (err, contacts) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: index_1.UserDisplayName });
    });
}
exports.DisplayContatListPage = DisplayContatListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, (err, contactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: index_1.UserDisplayName });
    });
}
exports.DisplayEditPage = DisplayEditPage;
;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: index_1.UserDisplayName });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessContatListPage(req, res, next) {
}
exports.ProcessContatListPage = ProcessContatListPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_1.default({
        "_id": id,
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAdress": req.body.EmailAddress
    });
    contact_1.default.updateOne({ _id: id }, updatedContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contact_1.default({
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAdress": req.body.EmailAddress
    });
    contact_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact-list.js.map