// var searchInputEl = document.getElementById("loc");
var searchInputEl = document.querySelector("#search-input-area");
var buttonSubmit = document.querySelector("#search-input-button");
// var loc = document.getElementById('loc').value;
// var loc = "Sydney";
// var city = loc.value;
var ApiKey = "510c27e4545e6077957004db2b092e1f";
var loc = document.getElementsByClassName('loc').value;

// Submit button for testing
$("button").click(function () {
    console.log("in function");
    var loc = searchInputEl.value.trim();
    getUrl(loc);
    console.log(loc)
});


// Will probably have to move this !!!
switch (document.getElementbyId("loc").value) {
    case 950540:
        city = "Auckland";
        break;
    case 1636970:
        city = "Christchurch";
        break;
    case 950155:
        city = "Nelson";
        break;
    case 1640249:
        city = "Northland";
        break;
    case 1633614:
        city = "Queenstown";
        break;
    case 1633616:
        city = "Rotorua";
        break;
    case 950424:
        city = "Southland";
        break;
    case 951308:
        city = "Wellington";
        break;
}

// Retrieve API
function getUrl(loc) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    var queryUrl = requestUrl + loc + "&appid=" + ApiKey;

    console.log(queryUrl)

    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);

            fiveDayForecastData(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

// PRINT Five Day Forecast
function fiveDayForecastData(forecastData) {

    var filteredForecast = forecastData.list.filter(function (day) {
        return day.dt_txt.indexOf("15:00:00") !== -1
    });

    for (var i = 0; i < filteredForecast.length; i += 1) {
        console.log(filteredForecast[i].weather[0].icon, filteredForecast[i].main.temp, filteredForecast[i].main.humidity);
        console.log(filteredForecast[i].wind.speed);
        var card = $("<div>").attr("class", "card-forecast-small");
        var date = $("<p>").text(moment.unix(filteredForecast[i].dt).format('L')).attr("class", "small-date");
        var img = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + filteredForecast[i].weather[0].icon + "@2x.png");
        var p1 = $("<p>").text("Temperature: " + filteredForecast[i].main.temp + '°C');
        var p2 = $("<p>").text("Humidity: " + filteredForecast[i].wind.speed + ' MPH');
        var p3 = $("<p>").text("Humidity: " + filteredForecast[i].main.humidity + '%');
        card.append(date, img, p1, p2, p3);
        $(".carousel-item").append($(card));
        // $("#result-content-forecast").append(card);
    }
    card.textContent = ""
}