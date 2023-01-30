import express from 'express';
const router = express.Router();
export default router;


import { DisplayAddPage, DisplayContatListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact-list';

import { AuthGard } from '../Util/index';

/* GET contact-list page - with /contact-list */
router.get('/', AuthGard, DisplayContatListPage);

/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', AuthGard, DisplayEditPage);

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', AuthGard, ProcessEditPage);

/* Display add page - with /add */
router.get('/add', AuthGard, DisplayAddPage);

/* Process edit/:id page - with /edit/:id */
router.post('/add', AuthGard, ProcessAddPage);

/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', AuthGard, ProcessDeletePage);


