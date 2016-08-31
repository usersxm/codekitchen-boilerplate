// app/routes/contact.js
var mongodb = require("mongodb");

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/:id')
  .get(function(req, res, next) {
    req.app.locals.db.collection('contacts').findOne({ _id: new mongodb.ObjectID(req.params.id) }, function(err, doc) {
      if (err) {
        next(err);
      } else {
        res.status(200).json(doc);
      }
    });
  })
  .put(function(req, res, next) {
    // Update user
  })
  .patch(function(req, res,next) {
    // Patch
  })
  .delete(function(req, res, next) {
    // Delete record
  });

  router.route('/')
  .get(function(req, res, next) {
    req.app.locals.db.collection('contacts').find({}).toArray(function(err, docs) {
      if (err) {
        next(err);
      } else {
        res.status(200).json(docs);
      }
    });
  })
  .post(function(req, res, next) {
    // Create new user
  });
};
