// app/routes/users.js
var db = require('../../config/initializers/database');

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/:id')
  .get(function(req, res, next) {
    db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
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
    db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
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
