// THIS IS NOT REQUIRED FOR TRANSPLANT
var buttonSubmit = document.querySelector("#search-input-button");



var searchInputLocEl = document.querySelector("#loc");
var ApiKey = "510c27e4545e6077957004db2b092e1f";
var city;

// Submit button for testing
$("button").click(function () {
    // console.log("in function");
    var loc = searchInputLocEl.value;

    switch (loc) {

        case "Select City":
            // Needs error handling
            console.log("ERROR")
            return;
        case "950540":
            city = "Auckland";
            break;
        case "1636970":
            city = "Christchurch";
            break;
        case "950155":
            city = "Nelson";
            break;
        case "1640249":
            city = "Northland";
            break;
        case "1633614":
            city = "Queenstown";
            break;
        case "1633616":
            city = "Rotorua";
            break;
        case "950424":
            city = "Southland";
            break;
        case "951308":
            city = "Wellington";
            break;
    }
    getUrl(city);
});

// Retrieve Forecast API
function getUrl(city) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    var queryUrl = requestUrl + city + "&appid=" + ApiKey + "&units=metric";
    // console.log(queryUrl)

    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            // console.log(data);
            fiveDayForecastData(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

// Print Forecast
function fiveDayForecastData(forecastData) {
    var filteredForecast = forecastData.list.filter(function (day) {
        return day.dt_txt.indexOf("15:00:00") !== -1
    });
    document.querySelector(".horizontal-scrollable").innerHTML = "";

    for (var i = 0; i < filteredForecast.length; i += 1) {
        // console.log(filteredForecast[i].weather[0].icon, filteredForecast[i].main.temp, filteredForecast[i].weather[0].description, filteredForecast[i].main.humidity);
        // console.log(filteredForecast[i].wind.speed);
        var card = $("<div>").attr("class", "card", "weather-card", "col-xs-4");
        var date = $("<h5>").text(moment.unix(filteredForecast[i].dt).format('L')).attr("class", "date");
        var img = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + filteredForecast[i].weather[0].icon + "@2x.png").attr("class", "icon");
        var description = $("<p>").text("Description: " + filteredForecast[i].weather[0].description).attr("class", "description-info")
        var p1 = $("<p>").text("Temperature: " + filteredForecast[i].main.temp + '°C').attr("class", "weather-info");
        var p2 = $("<p>").text("Wind: " + filteredForecast[i].wind.speed + ' MPH').attr("class", "weather-info");
        var p3 = $("<p>").text("Humidity: " + filteredForecast[i].main.humidity + '%').attr("class", "weather-info");
        card.append(date, img, description, p1, p2, p3);
        $(".horizontal-scrollable").append($(card));
    }
}