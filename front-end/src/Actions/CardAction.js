import $ from 'jquery';

export default function(cardData) {
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3000/login",
		data: cardData
	});
	return {
		type: "card",
		payload: thePromise
	}
}