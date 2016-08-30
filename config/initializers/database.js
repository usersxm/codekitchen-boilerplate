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
  var mongoUri = process.env.MONGODB_URI || "mongodb://carlos:asd123456@ds013366.mlab.com:13366/restapi"

  // Connect to the database before starting the application server.
  mongodb.MongoClient.connect(mongoUri, function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    logger.info('[SERVER] Database connection ready');
  });
  // Return the call back
  cb();
};
