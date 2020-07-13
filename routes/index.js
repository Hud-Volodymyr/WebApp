'use strict';
const express = require('express');
const router = express.Router();
const landing = require('../controllers/landing');
/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
router.get('/leads', landing.showLeads);
router.get('/lead/:leadId', landing.showLead);
module.exports = router;
