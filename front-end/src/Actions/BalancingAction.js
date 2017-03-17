import $ from 'jquery';

export default function(balancingData){
	// console.log("balancingAction");
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3000/weighted-results",
		data: balancingData
	});
	return {
		type: "balancing",
		payload: thePromise
	}
}