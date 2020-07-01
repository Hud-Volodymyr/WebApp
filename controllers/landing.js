'use strict';
// eslint-disable-next-line no-unused-vars
exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Express' });
};
