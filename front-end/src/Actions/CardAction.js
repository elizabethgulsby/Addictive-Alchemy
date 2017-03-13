import $ from 'jquery';

export default function(cardData) {
    var thePromise = $.ajax({
        method: "GET",
        url: "http://localhost:3000/weighted-results",
        data: cardData
    });
    return {
        type: "card",
        payload: thePromise
    }
}