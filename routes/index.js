'use strict';
const express = require('express');
const router = express.Router();
const landing = require('../controllers/landing');
const user = require('../controllers/user');
/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
router.get('/leads', landing.showLeads);
router.get('/lead/:leadId', landing.showLead);
router.get('/lead/:leadId/edit', landing.showEditLead);
router.post('/lead/:leadId/edit', landing.editLead);
router.post('/lead/:leadId/delete', landing.deleteLead);
router.post('/lead/:leadId/delete-json', landing.deleteLeadJson);
router.get('/login', user.showLogin);
router.get('/signup', user.showSignup);
module.exports = router;
