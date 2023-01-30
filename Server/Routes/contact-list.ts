import express from 'express';
const router = express.Router();
export default router;


import { DisplayAddPage, DisplayContatListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact-list';

/* GET contact-list page - with /contact-list */
router.get('/', DisplayContatListPage);

/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', DisplayEditPage);

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', ProcessEditPage);

/* Display add page - with /add */
router.get('/add', DisplayAddPage);

/* Process edit/:id page - with /edit/:id */
router.post('/add', ProcessAddPage);

/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', ProcessDeletePage);


