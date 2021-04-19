# The-ANZAC-Bubble-Travel-App

Welcome to The ANZAC Bubble Travel App!
In light of the new travel bubble between Australia and New Zealand, we hope to make your next trip to NZ easier. Simply input your desired location and any other necessary details and we'll show you accommodation within the area.

## Table of Content

- [About Us](#About-Us)
- [Our App](#Our-App)
    - [User Stories](#User-Stories)
    - [Functionality](#Functionality)
- [Process](#Process)
    - [Wireframe](#Wireframe)
    - [API](#API)
- [Deployed Site](#Deployed-Site)

## About Us
- Ushante Lancaster
- Sam Law
- Tim Rabbidge
- Carly Jackson

## Our App
The application we have created is a dynamic, user friendly, and convenient travel and accomodation searcher for Australians that are keen to visit our New Zealand neighbours! The ANZAC Bubble Travel App provides each user with the option to search by a range of categories, including the prefered city they'd like to explore, the price range of their choosing and the number of adults traveling. Additionally, the app provides the keen traveller with the current weekly weather forecast of their chosen city, displaying a brief description, temperature reading, the average wind speed, humidity percentage and a cute weather icon for the day.

### User Stories
    As a tourist from Melbourne,
    I WANT to visit a bed and breakfast near a mountain range and have the option of zip lining activities.
    SO THAT

    As a NZ Tourism employee,
    I WANT to see where Australians are planning on travelling
    SO THAT I can plan future funding ventures

    As a family of four,
    I WANT to go camping and explore the Maori culture.
    SO THAT

### Functionality
> The following shows the functionality of the app.



## Process
For our travel app, we used the following technologies:
### Web APIs:
#### Rapid API: Hotel API by APIDojo:

	var requiredString = "https://hotels4.p.rapidapi.com/properties/get-details?id=" + Id

	fetch(getDetails, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "652a2de92cmsh43a2bf88c4f4751p196d97jsnfa734ca7135b",
			"x-rapidapi-host": "hotels4.p.rapidapi.com"
		}
	})


#### OpenWeather API:
    
    var weatherApiKey = "510c27e4545e6077957004db2b092e1f";

	var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
	var queryUrl = requestUrl + city + "&appid=" + weatherApiKey + "&units=metric";

	fetch(queryUrl)
		.then(function (response) {
			return response.json();
		}).then(function (data) {
			fiveDayForecastData(data);
		})
		.catch(function (error) {
			console.log(error);
		})
        }

### Bootstrap:
Modals, Hero/Landing Page, Error Messages...
### Exhibit A: About Us Modal
<div class="modal fade" id="AboutUsModal" tabindex="-1" aria-labelledby="AboutUsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- Title -->
                    <h1 class="modal-title" id="AboutUsModalLabel">
                        About the <br><strong> ANZAC Travel Bubble</strong>
                    </h1>
                </div>
                <div class="modal-body">
                    <!-- About App Body Content -->
                    <h2>The App</h2>
                    <p>In light of the new travel bubble between Australia and New Zealand, we hope to make
                        your next trip to NZ easier. Simply input your desired location and any other necessary
                        details and we'll show you accommodation within the area.
                        <br>
                        Explore New zealand today!
                    </p>
                    <br />
                    <!-- About Team -->
                    <h2>About Us</h2>
                    <p>We're a team of four full-stack developers in training.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary custom-btn" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <br />

### JavaScript:

### JQuery:
		var card = $("<div>").attr("class", "weather-card", "col-xs-4");

#### Moment JS

		var date = $("<h5>").text(moment.unix(filteredForecast[i].dt).format('L')).attr("class", "date");


## Wireframe

Add our wireframes / or just the final wireframe

## APIs

### Rapid API
Hotel API by APIDojo
#### https://hotels4.p.rapidapi.com/properties/list?destinationId=[CITY-DESTINATION-ID]&pagenumber=1&checkIn=[CHECK-IN-DATE]&checkOut=[CHECK-OUT-DATE]&pageSize=[PAGE-SIZE]&adults1=[NUMBER-OF-ADULTS]
#### https://hotels4.p.rapidapi.com/properties/get-details?id=[CITY-DESTINATION-ID]
#### https://api.openweathermap.org/data/2.5/forecast?q=[CITY-NAME]&appid=[API-KEY]&units=metric

### OpenWeather API
Call 5 day / 3 hour forecast data
#### https://api.openweathermap.org/data/2.5/forecast?q=[CITY-NAME]&appid=[API-KEY]

## Deployed Site

https://caarlyjackson.github.io/The-ANZAC-Bubble-Travel-App/ 