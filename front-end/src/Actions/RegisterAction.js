import $ from 'jquery';

export default function(registerData){
	console.log("test");
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3000/register",
		data: registerData
	});
	return {
		type: "register",
		payload: thePromise
	}
}