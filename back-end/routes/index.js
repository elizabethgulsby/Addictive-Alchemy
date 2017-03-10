var express = require('express');
var router = express.Router();
var config = require('../config/config');
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
  		res.json(results);
  	});
});

//get the login page
router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var findUser = "SELECT * from users where user_name = ?";
	connection.query(findUser, [req.body.username], (error, results, fields) => {
		if (error) throw error;
		if (results.length === 0) {
			res.json({
				msg: "NOPE.exe"
			});
		}
		else {
			res.json({
				msg: "Cool!"
			})
		}
	});
});

module.exports = router;

