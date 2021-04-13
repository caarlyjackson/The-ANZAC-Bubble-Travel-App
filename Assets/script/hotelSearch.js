var hotelContainerEl = document.querySelector('#hotels-container');


// function for results 
var displayHotels = function (hotels){
    if(hotels.length === 0) {
        // display text for no hotels
        hotelContainerEl.textContent = 'No hotels found.';
        return;
    }
    
    // appending cards for results
    for (var i=0; i< hotels.length; i++) {
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
        hotelNameEL.textContent = //hotel name 
        ;

        var hotelCityEl = document.createElement('h6');
        hotelCityEl.classList = 'card-subtitle mb-2 text-muted';
        hotelCityEl.textContent = //city/town
        ;

        var hotelDescriptEL = document.createElement('p');
        hotelDescriptEL.classList = 'card-text';
        hotelDescriptEL.textContent = //hotel description
        ;

        var hotelImageEL = document.createElement('img');
        hotelImageEL.classList = 'card-img-bottom';
        hotelImageEL.setAttribute('src', '');

        hotelCardEL.appendChild(hotelBodyEL);
        hotelCardEL.appendChild(hotelImageEL);
        hotelBodyEL.appendChild(hotelNameEL, hotelCityEl, hotelDescriptEL);
    }
}