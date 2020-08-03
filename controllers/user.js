/* eslint-disable no-unused-vars */
'use strict';
exports.showLogin = (req, res, next) =>
  res.render('user/login', { formdata: {}, errors: {} });

exports.showSignup = (req, res, next) =>
  res.render('user/signup', { formData: {}, errors: {} });
