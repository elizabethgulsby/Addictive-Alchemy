import $ from 'jquery';

export default function(sideEffectData) {

    var thePromise = $.ajax({
        method: "GET",
        url: "http://www.elizabethgulsby.com:3030/display",
        data: sideEffectData
    });
    return {
        type: "sideeffect",
        payload: thePromise
    }

}