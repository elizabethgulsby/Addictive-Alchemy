import $ from 'jquery';

export default function(loginData) {
	var thePromise = $.ajax({
		method: "POST",
		url: "http://www.elizabethgulsby.com:3030/login",
		data: loginData
	});
	return {
		type: "login",
		payload: thePromise
	}
}