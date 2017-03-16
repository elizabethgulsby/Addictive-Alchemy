var express = require('express');
var router = express.Router();
var config = require('../config/config');
var mysql = require('mysql');
//var sideEffect = require('./SideEffectsTools.js');
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
router.get('/weighted-results', function(req, res, next) {
	//function that will get side effects based on color pairing supplied
	function getSideEffects(firstColor, secondColor) {
		var colorPairs = [];
		return new Promise(function(resolve, reject) {
			var colorQuery = "SELECT side_effect_id from side_effects where first_color=? and second_color=?";
			connection.query(colorQuery, [firstColor, secondColor], (error, results, fields) => {
				if (error) return reject(error);
				// console.log("Results Length: " + results.length);
				// console.log("I am " + results[0].side_effect_id);
					for (let u = 0; u < results.length; u++) {
						colorPairs.push(results[u].side_effect_id);
						// console.log("After Push: " + colorPairs[i]);
					}
					// console.log("Resolve colorPairs: " + colorPairs);
					resolve(colorPairs);
					
				});
				
			});
	}


	console.log("");console.log("");console.log("");
	var allSideEffects = [];

	//Pushes an array of matching side effects onto another array. 
	allSideEffects.push(getSideEffects('Purple', 'Purple'));
	allSideEffects.push(getSideEffects('Green', 'Green'));
	allSideEffects.push(getSideEffects('Blue', 'Blue'));
	allSideEffects.push(getSideEffects('Purple', 'Green'));
	allSideEffects.push(getSideEffects('Purple', 'Blue'));
	allSideEffects.push(getSideEffects('Green', 'Blue'));

	Promise.all(allSideEffects).then(allSideEffects => {
		// console.log("All Side Effects: " + allSideEffects.length);
	

		var cardPool = [];
		//hard-coded test integer values below; will be swapped for actual values being passed from slider (req.body?)
		cardPool.push(populateCardPool(allSideEffects[0], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[1], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[2], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[3], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[4], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[5], 1, 5));

		//this needs to wait until the anonymous function in populateCardPool finishes - output will be an array of weighted arrays (see cardPool.push() statements above)
		Promise.all(cardPool).then(cardPool => {
			// res.json("Purple Purple: " + cardPool[0] + " Green Green: " + cardPool[1] + "Blue Blue: " + cardPool[2] + "Purple Green: " + cardPool[3] + "Purple Blue: " + cardPool[4] + "Green Blue: " + cardPool[5]);

			var finalSideEffects = [];
			console.log("Card Pool Result: " + cardPool);
			finalSideEffects = selectFinalSideEffects(cardPool);

			//!!!!!!!!!!!!THIS IS THE FINAL SET OF WEIGHTED RESULTS!!!!!!!!!!!!!!!!!
			res.json("Final Side Effects: " + finalSideEffects);

		});


	});


	//function to populate cardPool based on speed/complexity weights (passed to route by slider)
	function populateCardPool(sideEffectsArray, preferredSpeedWeight, preferredComplexityWeight) {
	
		var cardPoolResult = [];

		// console.log("Side Effect Array Length: " + sideEffectsArray.length);
		// console.log("Side Effect Array: " + sideEffectsArray);


		return new Promise(function(resolve, reject) {
				// console.log("I am empty, see?" + cardPoolResult);
				var weight = 0;
				//Gets the speed/complexity weights
				//Vulnerable to SQL injection - parameterize later
				var currentCardWeightsQuery = "SELECT speed_weight, complexity_weight FROM side_effects WHERE side_effect_id in (" + sideEffectsArray + ")";

				// console.log("Side Effect Id Queried: " + sideEffectsArray);
				connection.query(currentCardWeightsQuery, (error, results, fields) => {
					if (error) return reject(error);

					for (let i = 0; i < results.length; i++) {
						weight = 5 - Math.abs(preferredSpeedWeight - results[i].speed_weight);
						weight += 5 - Math.abs(preferredComplexityWeight - results[i].complexity_weight);
						// console.log("Side Effect Id: " + sideEffectsArray[i] + " Weight: " + weight);
					
						//populates cardPool with sideEffectsArray query results post-weight calculations
						for (let e = 0; e < weight; e++) {
							cardPoolResult.push(sideEffectsArray[i]);
						}

					}

					console.log("Card Pool: " + cardPoolResult);
					resolve(cardPoolResult);

				})
		});

	}

	//randomly select the final side effects.
	function selectFinalSideEffects(weightedCardPool) {

		var finalPick = [];

		console.log("weightedCardPool.length: " + weightedCardPool.length);
		for (let i = 0; i < weightedCardPool.length; i++) {
			console.log("i: " + i);
			var pick = Math.floor(Math.random() * weightedCardPool[i].length);
			console.log("Pick: " + pick);
			finalPick.push(weightedCardPool[i][pick]);
			console.log("Final Pick: " + finalPick);
		}
			
		return finalPick;

	}



});




//route to return all side effects on "View Side Effects" page
router.get('/sideeffects', function(req, res, next) {
	var possibleOptionsQuery = "SELECT side_effect_name, image_natural, image_dangerous, speed_weight, complexity_weight FROM side_effects";
	connection.query(possibleOptionsQuery, (error, results, fields) => {
		res.json(results);
	})
});


module.exports = router;



