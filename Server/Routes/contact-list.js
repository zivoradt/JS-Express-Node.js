"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const contact_list_1 = require("../Controllers/contact-list");
const index_1 = require("../Util/index");
router.get('/', index_1.AuthGard, contact_list_1.DisplayContatListPage);
router.get('/edit/:id', index_1.AuthGard, contact_list_1.DisplayEditPage);
router.post('/edit/:id', index_1.AuthGard, contact_list_1.ProcessEditPage);
router.get('/add', index_1.AuthGard, contact_list_1.DisplayAddPage);
router.post('/add', index_1.AuthGard, contact_list_1.ProcessAddPage);
router.get('/delete/:id', index_1.AuthGard, contact_list_1.ProcessDeletePage);
//# sourceMappingURL=contact-list.js.map