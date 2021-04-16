var hotelContainerEl = document.querySelector('#hotels-container');
var hotel = data.body.searchresults.results
var currency = document.getElementById('currency').value;
// function for results 
var displayHotels = function (hotels) {
    if (hotels.length === 0) {
        // display text for no hotels
        hotelContainerEl.textContent = 'No hotels found.';
        return;
    }

    // appending cards for results
    for (var i = 0; i < hotels.length; i++) {
        // append card parts

        var hotelCardEL = document.createElement('div');
        hotelCardEL.classList = 'card';
        hotelCardEL.setAttribute('style', 'width: 18rem');
        hotelCardEL.setAttribute('href', '' + hotelName);
        hotelContainerEl.appendChild(hotelCardEL);

        var hotelBodyEL = document.createElement('div');
        hotelBodyEL.classList = 'card-body';


        var hotelNameEL = document.createElement('h5');
        hotelNameEL.classList = 'card-title text-center';
        hotelNameEL.textContent = data.body.searchresults.results[i].name //hotel name 
            ;

        var hotelAddEL = document.createElement('h5');
        hotelAddEL.classList = 'card-title text-center';
        hotelAddEL.textContent = data.body.searchresults.results[i].streetaddress + ',' + data.doby.searchresults.results[i].locality + ',' + data.doby.searchresults.results[i].postalCode //address
            ;

        var hotelCityEl = document.createElement('h6');
        hotelCityEl.classList = 'card-subtitle mb-2 text-muted';
        hotelCityEl.textContent = data.body.searchresults.results[i].neighbourhood //city/town
            ;

        var hotelDescriptEL = document.createElement('p');
        hotelDescriptEL.classList = 'card-text';
        hotelDescriptEL.textContent = 'This hotel is a ' + data.body.searchresults.results[i].vrBadge //hotel description
            ;

        var hotelPriceEL = document.createElement('p');
        hotelPriceEL.classList = 'card-text';
        hotelPriceEL.textContent = 'current cost per night is ' + data.body.searchresults.results[i].ratePlan.price.exactCurrent + currency //hotel price
            ;

        var hotelRatingEL = document.createElement('p');
        hotelRatingEL.classList = 'card-text';
        hotelRatingEL.textContent = 'Hotel is rated ' + data.body.searchresults.results[i].guestReviews.rating + '/' + data.body.searchresults.results[i].guestReviews.scale + ' with ' + data.body.searchresults.results[i].guestReviews.total + ' number of reviews'
            ;

        var hotelImageEL = document.createElement('img');
        hotelImageEL.classList = 'card-img-bottom';
        hotelImageEL.setAttribute('src', data.body.searchresults.results[i].optimizedThumbUrls.srpDesktop);

        hotelCardEL.appendChild(hotelBodyEL);
        hotelCardEL.appendChild(hotelImageEL);
        hotelBodyEL.appendChild(hotelNameEL, hotelAddEL, hotelCityEl, hotelDescriptEL, hotelPriceEL, hotelRatingEL);
    }
}