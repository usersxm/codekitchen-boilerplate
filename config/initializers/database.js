// config/initializers/database.js
var logger = require('winston');

module.exports = function(cb) {
  'use strict';
  // Initialize the component here then call the callback
  // More logic
  var mongodb = require("mongodb");
  var ObjectID = mongodb.ObjectID;

  var CONTACTS_COLLECTION = "contacts";
  var db;
  var mongoUri = process.env.MONGODB_URI;

  // Connect to the database before starting the application server.
  mongodb.MongoClient.connect(mongoUri, function (err, database) {
    if (err) {
      logger.info(err);
      process.exit(1);
    }
    // Save database object from the callback for reuse.
    db = database;
    // Return the call back
    cb(null, db);
    logger.info('[SERVER] Database connection ready');
  });
};
