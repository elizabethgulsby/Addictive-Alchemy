import $ from 'jquery';

export default function(favoriteData) {
	console.log(favoriteData)
    var thePromise = $.ajax({
        method: "POST",
        url: "http://www.elizabethgulsby.com:3030/display",
        data: favoriteData
    });
    return {
        type: "favorited",
        payload: thePromise
    }

}