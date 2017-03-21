import $ from 'jquery';

export default function(sideEffectData) {

    var thePromise = $.ajax({
        method: "GET",
        url: "http://localhost:3000/sideeffects",
        data: sideEffectData
    });
    return {
        type: "sideeffect",
        payload: thePromise
    }

}