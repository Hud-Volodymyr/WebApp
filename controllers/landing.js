/* eslint-disable no-unused-vars */
'use strict';
const models = require('../models');
exports.getLanding = (req, res, next) =>
  res.render('landing', { title: 'Express' });

exports.submitLead = (req, res, next) => models.Lead.create({
  email: req.body.leadEmail,
}).then(lead => res.redirect('/leads'));

exports.showLeads = (req, res, next) =>
  models.Lead.findAll().then(leads => {
    res.render('landing', {
      title: 'Express',
      leads,
    });
  });

exports.showLead = (req, res, next) =>
  models.Lead.findOne({
    where: {
      id: req.params.leadId
    }
  }).then(lead => {
    res.render('lead', { lead });
  });

exports.showEditLead = (req, res, next) =>
  models.Lead.findOne({
    where: {
      id: req.params.leadId
    }
  }).then(lead => {
    res.render('lead/editLead', { lead });
  });

exports.editLead = (req, res, next) =>
  models.Lead.update({
    email: req.body.leadEmail
  }, {
    where: {
      id: req.params.leadId
    }
  }).then(result => {
    res.redirect('/lead/' + req.params.leadId);
  });

