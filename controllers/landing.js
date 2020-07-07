'use strict';
const models = require('../models');
// eslint-disable-next-line no-unused-vars
exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Express' });
};
// eslint-disable-next-line no-unused-vars
exports.submitLead = function(req, res, next) {
  return models.Lead.create({
    email: req.body.lead_email,
  // eslint-disable-next-line no-unused-vars
  }).then(lead => res.redirect('/'));
};
