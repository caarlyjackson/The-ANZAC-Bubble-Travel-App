var city = "Sydney"; // Test city
var ApiKey = "510c27e4545e6077957004db2b092e1f";

// Retrieve API
function getUrl(city) {
    var requestUrl = "api.openweathermap.org/data/2.5/forecast?q=";
    var queryUrl = requestUrl + city + "&appid=" + ApiKey;

    console.log(queryUrl)

    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);

            forecastResults(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}