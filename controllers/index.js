'use strict';
// eslint-disable-next-line no-unused-vars
exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};
