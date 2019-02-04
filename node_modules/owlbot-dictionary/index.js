require('isomorphic-fetch');

var rootUrl = "https://owlbot.info/api/v1/dictionary/";
var format = "?format=json";

module.exports = {
    define: function(word) {
        var url = rootUrl + word.toLowerCase() + format;
        return fetch(url).then(function(response) {
            return response.json();
        });
    }
}
