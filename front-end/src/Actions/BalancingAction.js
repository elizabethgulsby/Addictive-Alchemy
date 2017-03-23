import $ from 'jquery';

export default function(balancingData){
	// console.log("balancingAction");
	var thePromise = $.ajax({
		method: "POST",
		url: "http://www.elizabethgulsby.com:3030/weighted-results",
		data: balancingData
	});
	return {
		type: "balancing",
		payload: thePromise
	}
}