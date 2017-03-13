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
//password encryption
var bcrypt = require('bcrypt-nodejs');
var hashedPassword = bcrypt.hashSync('x');
console.log(hashedPassword)
var checkHash = bcrypt.compareSync('x', hashedPassword);
console.log(checkHash)



/* GET home page. */
//below is a test query for now
router.get('/', function(req, res, next) {
  	var sideEffectsQuery = "SELECT DISTINCT *, first_color, second_color FROM side_effects ORDER BY rand() limit 6";
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
			// username is valid.  Check password against bcrypt.  Remove any test data added before bcrypt.
			checkHash = bcrypt.compareSync(password, results[0].password);
			console.log(checkHash);
			if (checkHash === false) {
				//password not found!
				res.json({
					msg: "Bad password!"
				})
			}
			else {
				//password found, username checks out - add token that keeps user logged in for 1 hr max
				var token = randtoken.uid(40);
				insertToken = "UPDATE users SET token = ?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR) " + "WHERE username = ?";
				connection.query(insertToken, [token, username], (error, results, fields) => {
					console.log(token);
					res.json({
						msg: "User exists! Insert token.",
						token: token,
						username: req.body.username
					});
				});
			}
		}
	});
});

//get the registration page
router.post('/register', function(req, res, next) {
	// console.log("test")
	//first check for dupes
	checkDupes = "SELECT * FROM users WHERE user_name = ? OR email = ?"
	console.log("hello");
	connection.query(checkDupes, [req.body.username, req.body.email], (error, results, fields) => {
		if (results.length === 0) {
			// console.log("no dupes")
			//register this person.  No dupe exists.
			var insertQuery = "INSERT INTO users (user_name, password, email) VALUES " + "(?, ?, ?)";
			connection.query(insertQuery, [req.body.username, bcrypt.hashSync(req.body.password), req.body.email], (error2, results2, fields2) => {
				// console.log(bcrypt.hashSync(req.body.password));
				if (error2) throw error2;
				res.json({
					msg: "User added!"
				})
			});
		}
		else {
			// console.log("dupes")
			res.json({
				msg: "This user already exists."
			})
		}
	})
	
});

//query to grab color combinations
router.get('/sideeffects', function(req, res, next) {

	purplePurpleArray = getSideEffects('purple', 'purple');

	var purplePurpleQuery = "SELECT side_effect_id FROM side_effects WHERE first_color = 'Purple' AND second_color = 'Purple'";
	connection.query(purplePurpleQuery, (error, results, fields) => {
		if (error) throw error;
		results.map((result, index) => {
			purplePurpleArray.push(result);
		})
		// res.json(purplePurpleArray);
	})
	var blueBlueQuery = "SELECT side_effect_id FROM side_effects WHERE first_color = 'Blue' AND second_color = 'Blue'";
	connection.query(blueBlueQuery, (error2, results2, fields2) => {
		if (error2) throw error2;
		results2.map((results2, index) => {
			blueBlueArray.push(results2);
		})
		res.json(blueBlueArray);
	})
});



module.exports = router;

/////////////////Functions, Arrays/////////////////

//color combination arrays, each contains the side_effect_ids of the cards corresponding to the color combos
var purplePurpleArray = [];
var greenGreenArray = [];
var blueBlueArray = [];
var purpleGreenArray = [];
var bluePurpleArray = [];
var blueGreenArray = [];


//array that will hold all of the cards from a specific color combo; will not contain any other side effect ids other than the ones corresponding to one color combination at a time
var cardPool = [];

//function that will get side effects based on color pairing supplied; pushes all results matching this pairing onto the appropriate array
function getSideEffects(firstColor, secondColor) {
//add generic form of queries above in side effects here
//return an array
}

//function to get speed weight of each card
function getSpeedWeight(sideEffectId, preferredSpeedWeight) {
//add formula here
//return the card's official speed weight (Math.abs)
}

//function to get complexity weight of each card
function getComplexityWeight(sideEffectId, preferredComplexityWeight) {
//add formula here
//return the card's official complexity weight (Math.abs)
}

//function to populate cardPool based on both weights
function populateCardPool(sideEffectId, preferredSpeedWeight, preferredComplexityWeight) {
	var weight = getSpeedWeight(sideEffectId, preferredSpeedWeight);
	weight += getComplexityWeight(sideEffectId, preferredComplexityWeight);
	//populates cardPool
	for (let i = 0; i < weight; i++) {
		cardPool.push(sideEffectId);
	}
}


