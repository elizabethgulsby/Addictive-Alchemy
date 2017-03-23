import $ from 'jquery';

export default function(favoriteData) {
	console.log(favoriteData)
    var thePromise = $.ajax({
        method: "POST",
        url: "http://localhost:3000/display",
        data: favoriteData
    });
    return {
        type: "favorited",
        payload: thePromise
    }

}