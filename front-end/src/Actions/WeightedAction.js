import $ from 'jquery';

export default function(weightData) {

    var thePromise = $.ajax({
        method: "GET",
        url: "http://localhost:3000/weighted-results",
        data: weightData
    });
    return {
        type: "weight",
        payload: thePromise
    }

}