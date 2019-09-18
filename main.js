var express = require('express');
var app = express();
var DbConfig = require('./configs/db.js');
var AppConfig = require('./configs/app.js');

var mongoClient = require('mongodb').MongoClient;
mongoClient.connect(DbConfig.url, function(error, connection){
	if (error) return console.log(err);
	db = connection.db(DbConfig.dbName);
	require('./routes.js')(app, db);
	app.listen(AppConfig.port, () => {
		console.log("Starting server...")
		console.log("App up and listening on " + AppConfig.port);
	})
});