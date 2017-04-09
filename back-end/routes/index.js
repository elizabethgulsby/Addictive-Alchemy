var express = require('express');
var router = express.Router();
var config = require('../config/config');
var randtoken = require('rand-token');
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
console.log("1: " + hashedPassword)
var checkHash = bcrypt.compareSync('x', hashedPassword);
console.log("2: " + checkHash)
// var isLoggedIn = "false";


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
	console.log("Res: " + res);
	var username = req.body.username;
	var password = req.body.password;
	// var email = req.body.email;
	var findUser = "SELECT * from users where user_name = ?";
	connection.query(findUser, [req.body.username], (error, results, fields) => {
		if (error) throw error;
		//user (or username entered) does not exist.  Do not proceed with login.
		if (results.length === 0) {
			res.json({
				//userId -1 means a user is not logged in.
				userId: -1,
				msg: "User does not exist."
			});
		}
		else {
			// username is valid.  Check password against bcrypt.  Remove any test data added before bcrypt.
			checkHash = bcrypt.compareSync(password, results[0].password);
			console.log('3: %%%%%%%%%%%');
			console.log("Here's the checkHash: " + checkHash);
			console.log('4: %%%%%%%%%%%');
			if (checkHash === false) {
				//password not found!
				res.json({
					userId: -1,
					msg: "Bad password!"
				})
			}
			else {
			// else if (checkHash === true) {
				//password found, username checks out - add token that keeps user logged in for 1 hr max
				var token = randtoken.uid(40);
				console.log("5: Here is the username: " + username);
				insertToken = "UPDATE users SET token = ?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR) " + "WHERE user_name = ?";
				connection.query(insertToken, [token, username], (error2, results2, fields2) => {
					if (error2) throw error2;
					// console.log("This is the token: " + token);
					res.json({
						userId: results[0].user_id,
						msg: "User exists! Insert token.",
						token: token,
						username: req.body.username
					});
				});

				console.log("6: Is there an error?");
			}
			// else {
			// 	//user has logged out.  Delete token from database. 
			// 	var loggedOutQuery = "UPDATE users SET token = NULL where user_id = ?";
			// 	connection.query(loggedOutQuery, [req.body.username], (error3, results3, fields3) => {
			// 		if (error3) throw error3;
			// 		res.json({
			// 			msg: "User has logged out!"
			// 		})
			// 	})
			// }
		}
	});
});

//get the registration page
router.post('/register', function(req, res, next) {
	// console.log("test")
	//first check for dupes
	checkDupes = "SELECT * FROM users WHERE user_name = ? OR email = ?"
	console.log("7: hello");
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
router.post('/weighted-results', function(req, res, next) {
	var speedweight = req.body.speed_value;
	var complexityweight = req.body.complexity_value;
	console.log("8: " + speedweight);
	console.log("9: " + complexityweight);
	//function that will get side effects based on color pairing supplied
	function getSideEffects(firstColor, secondColor) {
		var colorPairs = [];
		return new Promise(function(resolve, reject) {
			var colorQuery = "SELECT side_effect_id FROM side_effects WHERE first_color=? AND second_color=?";
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


	console.log("9: ");console.log("10: ");console.log("11: ");
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
		//pushing each index of allSideEffects() plus speedweight/complexityweight from slider 
		cardPool.push(populateCardPool(allSideEffects[0], speedweight, complexityweight));
		cardPool.push(populateCardPool(allSideEffects[1], speedweight, complexityweight));
		cardPool.push(populateCardPool(allSideEffects[2], speedweight, complexityweight));
		cardPool.push(populateCardPool(allSideEffects[3], speedweight, complexityweight));
		cardPool.push(populateCardPool(allSideEffects[4], speedweight, complexityweight));
		cardPool.push(populateCardPool(allSideEffects[5], speedweight, complexityweight));

		//this needs to wait until the anonymous function in populateCardPool() finishes - output will be an array of weighted arrays (see cardPool.push() statements above)
		Promise.all(cardPool).then(cardPool => {
			// res.json("Purple Purple: " + cardPool[0] + " Green Green: " + cardPool[1] + "Blue Blue: " + cardPool[2] + "Purple Green: " + cardPool[3] + "Purple Blue: " + cardPool[4] + "Green Blue: " + cardPool[5]);

			var finalSideEffects = [];
			console.log("11: Card Pool Result: " + cardPool);
			finalSideEffects = selectFinalSideEffects(cardPool);

			console.log("12: finalSideEffects: " + finalSideEffects);


			var imageFiles = [];
			imageFiles = getFilesFromIds(finalSideEffects).then(imageFiles => {
				console.log("13: Image File from promise: " + imageFiles);
				//!!!!!!!!!!!THIS MIGHT BE THE FINAL SET OF SIDE EFFECTS BY FILE NAME!!!!!!!
				res.json({
					FinalSideEffects: imageFiles
				});				

			});

		});


	});


	//function to populate cardPool based on speed/complexity weights (passed to route by slider) - will return a weighted array of color arrays
	function populateCardPool(sideEffectsArray, preferredSpeedWeight, preferredComplexityWeight) {
		
		var cardPoolResult = [];

		// console.log("Side Effect Array Length: " + sideEffectsArray.length);
		// console.log("Side Effect Array: " + sideEffectsArray);


		return new Promise(function(resolve, reject) {
				// console.log("I am empty, see?" + cardPoolResult);
				var weight = 0;
				//Gets the speed/complexity weights
				//Vulnerable to SQL injection - parameterize later
				var currentCardWeightsQuery = "SELECT side_effect_id, '-1' as user_id, speed_weight, complexity_weight, '0' as favorited, '0' as blocked FROM side_effects WHERE side_effect_id in (" + sideEffectsArray + ")";


				var isLoggedIn = false;
				console.log('*****' + isLoggedIn + '*****')
				//hard coded; test purposes (replace this with the user_id of who is currently logged in)
				// var userID = 7;
				//checks to see if user is logged in
				if (isLoggedIn === true) {
					currentCardWeightsQuery = "SELECT side_effects.side_effect_id, user_side_effect_weights.user_id, speed_weight, complexity_weight, favorited, blocked FROM side_effects LEFT OUTER JOIN user_side_effect_weights ON side_effects.side_effect_id = user_side_effect_weights.side_effect_id WHERE (user_id is NULL or user_id =" + userID + ") AND (side_effects.side_effect_id IN (" + sideEffectsArray + "))";
				}


				// console.log("Side Effect Id Queried: " + sideEffectsArray);
				connection.query(currentCardWeightsQuery, (error, results, fields) => {
					if (error) return reject(error);
					console.log("These are the weights: " + preferredSpeedWeight + "," + preferredComplexityWeight)
					for (let i = 0; i < results.length; i++) {
						console.log("preferredSpeedWeight typeof: " + typeof preferredSpeedWeight);
						//logic for random queries - if a side effect is unweighted, then it will get a single entry
						//when deal random side effects is clicked, have it go to the same route as weighted side effects. Have it also pass a value, so that route knows to hide the weighted side effects sliders, and that route will also ignore the weighted side effects sliders. When this function is called by that route, through that method it will set the preferred values to 0, which will mean it will be an unweighted side effect.
						if (preferredSpeedWeight == 0 || preferredComplexityWeight == 0) {
							console.log("Random route test - see below");
							weight = 1;
						}
						else {
							//side effects are being weighted from slider by user
							weight = 5 - Math.abs(preferredSpeedWeight - results[i].speed_weight);
							weight += 5 - Math.abs(preferredComplexityWeight - results[i].complexity_weight);
						}

						//if the side_effect is favorited, add 2 to the weight (game designer requested that value to be added = 2)
						//favorited still impacts non-weighted side effects per game designer's request
						if (results[i].favorited === true) {
							console.log('Favorited bump');
							console.log(results[i].side_effect_id);
							weight += 200;
						}
						//weight is to equal 0 so that it is not included in any weighting results if blocked by user
						if (results[i].blocked == 1) {
							weight = 0;
						}
						// console.log("Side Effect Id: " + sideEffectsArray[i] + " Weight: " + weight);
					
						//populates cardPool with sideEffectsArray query results post-weight calculations
						for (let e = 0; e < weight; e++) {
							cardPoolResult.push(sideEffectsArray[i]);
						}

					}

					console.log("14: Card Pool: " + cardPoolResult);
					resolve(cardPoolResult);

				})
		});

	}

	//randomly select the final side effects.
	function selectFinalSideEffects(weightedCardPool) {

		var finalPick = [];

		console.log("weightedCardPool.length: " + weightedCardPool.length);
		for (let i = 0; i < weightedCardPool.length; i++) {
			console.log("15: i: " + i);
			var pick = Math.floor(Math.random() * weightedCardPool[i].length);
			console.log("Pick: " + pick);
			finalPick.push(weightedCardPool[i][pick]);
			console.log("16: Final Pick: " + finalPick);
		}
			
		return finalPick;

	}

	//function to translate selected id into image file names for the front end to use.
	function getFilesFromIds(ids) {

		var imageFiles = [];

		return new Promise(function(resolve, reject) {

			var query = "SELECT image_natural FROM side_effects WHERE side_effect_id in (" + ids + ")";
			connection.query(query, (error, results, fields) => {
				if (error) return reject(error);

				for (let i = 0; i < results.length; i++) {
					imageFiles.push(results[i].image_natural);
				}
				console.log("17: getFilesFromIds Files: " + imageFiles);
				console.log("18: imageFiles.length: " + imageFiles.length);

				resolve(imageFiles);

			})

		})


	}



});




//route to return all side effects on "View Side Effects" page
router.post('/display', function(req, res, next) {

	console.log("I've been triggered!")
	console.log(req.body);

	//favoritedCardNumber = side_effect_id passed in from "Favorite" button
	var favoritedCardNumber = req.body.cardNumber;
	console.log("Card Number: " + favoritedCardNumber);
	
	//favorited = status of favorited (1 = yes, 0 = no)
	var favorited = req.body.favorite;

	// var blocked = req.body.blocked;

	//userId = passed in from this.props.loginResponse.userId within Display
	var userId = req.body.userId;

	console.log("WillMount: " + req.body.willMount);
	//need to make a database call before the component mounts to see if favoritedCardNumber is favorited.
	if (JSON.parse(req.body.willMount) == true) {
		// then this is the code for the will mount
		console.log("Will Mount!");
		console.log(favoritedCardNumber);
		//query to 
		res.json({ Favorited: "Mom" });

	}
	else {
		console.log("Clicked not mounted!");
		//check to see if userId/favorited value pairing exists in database
		var pairingQuery = "SELECT user_id, side_effect_id FROM user_side_effect_weights WHERE user_id = ? AND side_effect_id = ?";
		connection.query(pairingQuery, [userId, favoritedCardNumber], (error, results, fields) => {
			if (error) throw error;
			console.log(results)
			if (results.length > 0) {
				var insertFavoritedQuery = "UPDATE user_side_effect_weights SET favorited = ? WHERE user_id = ? and side_effect_id = ?";
				connection.query(insertFavoritedQuery, [favorited, userId, favoritedCardNumber], (error2, results2, fields2) => {
					if (error2) throw error2;
					console.log("results2: " + results2);
					res.json({
						msg: "Inserted value into 'favorited'."
					})
				})
			}
		});
	}	
});


module.exports = router;



