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
Ushante Lancaster
Sam Law
Tim Rabbidge
Carly Jackson

## Our App
The ANZAC Bubble Travel App is a dynamic, user friendly, and convenient travel and accomodation searcher for Australians that are keen to visit our New Zealand neighbours! The application provides each user with the option to search by a range of categories, including the prefered city they'd like to explore, the price range of their choosing and the number of adults traveling. Additionally, the app provides the keen traveller with the current weekly weather forecast of their chosen city, displaying a brief description, temperature reading, the average wind speed, humidity percentage and a cute weather icon for the day.

### User Stories
Ollie, a young tourist from Melbourne, is keen to embark on his next adventure choosing to explore the vast landscape of New Zealand.  He's hoping to stay at a range of backpacker hostels with the option of spending a few nights in a holiday park or campground while he surfs Highway 45 and hikes the Pouakai Circuit.

Amy, Roger & their 2 year old son Phillip have been looking forward to getting overseas for a while.  They’re looking to travel around a few places in New Zealand to see the sights, but also keep Phillip entertained.

Suzannah and Tommy are planning their first getaway since lockdown  and plan to go camping. They want to be able to gage the weather forecast in Wellington so they can plan for rainy days and the activities availible in the given conditions.

### Functionality
# USHANTE !!!!! images and/or gifs to show site

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
    if (hotels.length === 0) {
        hotelContainerEl.textContent = 'No hotels found.';
        return;
    }

    // appending cards for results
        for (var i = 0; i < hotels.length; i++) {

    var hotelCardEL = document.createElement('div');
        hotelCardEL.classList = 'card';
        hotelCardEL.setAttribute('style', 'width: 18rem');
        hotelContainerEl.appendChild(hotelCardEL);


### JQuery:
        var card = $("<div>").attr("class", "weather-card", "col-xs-4");


#### Moment JS
        var date = $("<h5>").text(moment.unix(filteredForecast[i].dt).format('L')).attr("class", "date");


## Wireframe
Initial Wireframes:
<img src='./assets/images/Wireframe-1a.png'>
<img src='./assets/images/Wireframe-2a.png'>
<img src='./assets/images/Wireframe-2b.png'>
<img src='./assets/images/Wireframe-2c.png'>
<img src='./assets/images/Wireframe-3a.png'>


## APIs
### Rapid API
Hotel API by APIDojo
#### https://hotels4.p.rapidapi.com/properties/list?destinationId=[CITY-DESTINATION-ID]&pagenumber=1&checkIn=[CHECK-IN-DATE]&checkOut=[CHECK-OUT-DATE]&pageSize=[PAGE-SIZE]&adults1=[NUMBER-OF-ADULTS]
#### https://hotels4.p.rapidapi.com/properties/get-details?id=[CITY-DESTINATION-ID]
#### https://api.openweathermap.org/data/2.5/forecast?q=[CITY-NAME]&appid=[API-KEY]&units=metric

### OpenWeather API
Call 5 day / 3 hour forecast data
#### https://api.openweathermap.org/data/2.5/forecast?q=[CITY-NAME]&appid=[API-KEY]


# Deployed Site
https://caarlyjackson.github.io/The-ANZAC-Bubble-Travel-App/ 
