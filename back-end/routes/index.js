var express = require('express');
var router = express.Router();
var config = require('..config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
	user: config.user,
	password: config.password,
	host: config.host,
	database: config.database
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  	var sideEffectsQuery = "SELECT side_effect_name FROM side_effects WHERE set_id = 5";
  	connection.query(sideEffectsQuery, (error, results, fields) => {
  		if (error) throw error;
  		res.json({
  			msg: "Sanity Check for Back End."
  		});
  	});
});

module.exports = router;
