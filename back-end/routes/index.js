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
				console.log("Results Length: " + results.length);
				// console.log("I am " + results[0].side_effect_id);
					for (let u = 0; u < results.length; u++) {
						colorPairs.push(results[u].side_effect_id);
						// console.log("After Push: " + colorPairs[i]);
					}
					console.log("Resolve colorPairs: " + colorPairs);
					resolve(colorPairs);
					
				});
				
			});
	}



	var allSideEffects = [];

	//Pushes an array of matching side effects onto another array. 
	allSideEffects.push(getSideEffects('Purple', 'Purple'));
	allSideEffects.push(getSideEffects('Green', 'Green'));
	allSideEffects.push(getSideEffects('Blue', 'Blue'));
	allSideEffects.push(getSideEffects('Purple', 'Green'));
	allSideEffects.push(getSideEffects('Purple', 'Blue'));
	allSideEffects.push(getSideEffects('Green', 'Blue'));

	var cardPool = [];

	Promise.all(allSideEffects).then(allSideEffects => {
		console.log("All Side Effects: " + allSideEffects.length);
	

		//hard-coded test integer values below; will be swapped for actual values being passed from slider (req.body?)
		cardPool.push(populateCardPool(allSideEffects[0], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[1], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[2], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[3], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[4], 1, 5));
		cardPool.push(populateCardPool(allSideEffects[5], 1, 5));

		Promise.all(cardPool).then(cardPool => {
			res.json("Purple Purple: " + cardPool[0] + " Green Green: " + cardPool[1]);

		});

	});

	// Promise.all(greenGreenArray).then(greenGreenArray => {
	// 	console.log("GG: " + greenGreenArray);
	// 	for (let i = 0; i < greenGreenArray.length; i++) {
	// 		//hard-coded test integer values below; will be swapped for actual values being passed from slider (req.body?)
	// 		populateCardPool(cardPoolGG, greenGreenArray[i], 3, 5);
	// 		console.log("Now I am " + cardPoolGG);
	// 	}
	// })

	// Promise.all(blueBlueArray).then(blueBlueArray => {
	// 	console.log("BB: " + blueBlueArray);
	// 	for (let i = 0; i < blueBlueArray.length; i++) {
	// 		//hard-coded test integer values below; will be swapped for actual values being passed from slider (req.body?)
	// 		populateCardPool(cardPoolBB, blueBlueArray[i], 3, 5);
	// 		console.log("Now I am " + cardPoolBB);
	// 	}
	// })

	// Promise.all(purpleGreenArray).then(purpleGreenArray => {
	// 	console.log("PG: " + purpleGreenArray);
	// 	for (let i = 0; i < purpleGreenArray.length; i++) {
	// 		//hard-coded test integer values below; will be swapped for actual values being passed from slider (req.body?)
	// 		populateCardPool(cardPoolPG, purpleGreenArray[i], 3, 5);
	// 		console.log("Now I am " + cardPoolPG);
	// 	}
	// })

	// Promise.all(purpleBlueArray).then(purpleBlueArray => {
	// 	console.log("PB: " + purpleBlueArray);
	// 	for (let i = 0; i < purpleBlueArray.length; i++) {
	// 		//hard-coded test integer values below; will be swapped for actual values being passed from slider (req.body?)
	// 		populateCardPool(cardPoolPB, purpleBlueArray[i], 3, 5);
	// 		console.log("Now I am " + cardPoolPB);
	// 	}
	// })

	// Promise.all(greenBlueArray).then(greenBlueArray => {
	// 	console.log("GB: " + greenBlueArray);
	// 	for (let i = 0; i < greenBlueArray.length; i++) {
	// 		//hard-coded test integer values below; will be swapped for actual values being passed from slider (req.body?)
	// 		populateCardPool(cardPoolGB, greenBlueArray[i], 3, 5);
	// 		console.log("Now I am " + cardPoolGB);
	// 	}
	// })




	// Promise.all(masterColorPairs).then(contentsOfPromise => {
	// 	console.log("Content of Promise: " + contentsOfPromise);
	// });


	//function to populate cardPool based on speed/complexity weights (passed to route by slider)
	function populateCardPool(sideEffectsArray, preferredSpeedWeight, preferredComplexityWeight, callback) {
	
		var cardPool = [];

		console.log("Side Effect Array Length: " + sideEffectsArray.length);
		console.log("Side Effect Array: " + sideEffectsArray);


		return new Promise(function(resolve, reject) {


			for (let i = 0; i < sideEffectsArray.length; i++) {



				console.log("I am empty, see?" + cardPool);
				var weight = 0;
				//Gets the speed/complexity weights
				var currentCardWeightsQuery = "SELECT speed_weight, complexity_weight FROM side_effects WHERE side_effect_id = ?";
				console.log("Side Effect Id Queried: " + sideEffectsArray[i]);
				connection.query(currentCardWeightsQuery, sideEffectsArray[i], (error, results, fields) => {
					// res.json(results);
					if (error) return reject(error);

					weight = 5 - Math.abs(preferredSpeedWeight - results[0].speed_weight);
					weight += 5 - Math.abs(preferredComplexityWeight - results[0].complexity_weight);
					console.log("Side Effect Id: " + sideEffectsArray[i] + " Weight: " + weight);

					//populates cardPool
					for (let e = 0; e < weight; e++) {
						cardPool.push(sideEffectsArray[i]);
					}

					console.log("Card Pool: " + cardPool);

				})

			}

			//!!!!!Ask how I can turn this functions connection.query into a promise. This Promise doesn't return like the previous ones.
			//This resolve will be empty unless I can do a promise all with connection.query as well.
			//This is because connection.query is creating an anonymous function, and all functions are async.
			Promise.all(cardPool).then(cardPool => {
				console.log("!!!Card Pool Final: " + cardPool);
				resolve(cardPool);
			})


		});

		// NOTE:
		// Because

		// connection.query(currentCardSpeedWeightQuery, sideEffectsArray[i], (error, results, fields) => {

		// has an anonymous function in it, another async process is created. If we can wait for those to finish, then everything will output as json.

		// The question to ask is how can you do something like a promise.all on anonymous functions? How can you wait till each of those database calls finish before you return the result of cardPool?





		//return cardPool;
	}

	// //function to get speed weight of each card
	// function getSpeedWeight(sideEffectId, preferredSpeedWeight) {
	// 	var currentCardSpeedWeightQuery = "SELECT speed_weight FROM side_effects WHERE side_effect_id = ?";
	// 	var currentCardSpeedWeight = 0;
	// 	connection.query(currentCardSpeedWeightQuery, sideEffectId, (error, results, fields) => {
	// 		// res.json(results);
	// 		currentCardSpeedWeight = results[0].speed_weight;
	// 		console.log("Results: " + currentCardSpeedWeight);
	// 	})
	// 	var NumberOfSpeedEntries = 5 - Math.abs(preferredSpeedWeight - currentCardSpeedWeight);
	// 	//return the card's official speed weight (Math.abs)
	// 	return NumberOfSpeedEntries;
	// }

	// //function to get complexity weight of each card
	// function getComplexityWeight(sideEffectId, preferredComplexityWeight) {
	// //add formula here
	// //return the card's official complexity weight (Math.abs)
	// 	return 2;
	// }


});

//route to return all side effects on "View Side Effects" page
router.get('/sideeffects', function(req, res, next) {
	var possibleOptionsQuery = "SELECT side_effect_name, image_natural, image_dangerous, speed_weight, complexity_weight FROM side_effects";
	connection.query(possibleOptionsQuery, (error, results, fields) => {
		res.json(results);
	})
});


module.exports = router;



