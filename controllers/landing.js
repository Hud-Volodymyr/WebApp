'use strict';
// eslint-disable-next-line no-unused-vars
exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Express' });
};
// eslint-disable-next-line no-unused-vars
exports.submitLead = function(req, res, next) {
  console.log('lead_email:', req.body.lead_email);
  res.redirect('/');
};
