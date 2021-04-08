// Returns list of cities in new zealand, use to get city code
// match user selection to response values to obtain city code
//No parameters needed as we only care about NZ

fetch("https://hotels4.p.rapidapi.com/locations/search?query=new%20zealand&locale=en_US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "652a2de92cmsh43a2bf88c4f4751p196d97jsnfa734ca7135b",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//searches hotels in city by city code obtained above
//Need to match user selection to reponse value to obtain hotel code for the below
//REQUIRED PARAMETERS:
//destinationId(number) City code
//pageNumber(number) The page number in which data is display
//checkIn(string) check in date MUST BE IN FORMAT yyyy-MM-dd
//checkOut(string) check out date MUST BE IN FORMAT yyyy-MM-dd
//pageSize(number) Total items returned in every requests (max 25)
//adults1(number) The number of adults in first room
//OPTIONAL PARAMETERS
//children1(string) The age of every children separated by comma in the first room. Ex : 5,11
//currency(string) The currency code
//priceMin(number) Minimum price
//priceMax(number) Maximum price
//amenityIds(string)Check for suitable value (separated by comma to specify multiple values) in facilities field returned right in this endpoint
//themeIds(string) Check for suitable value (separated by comma to specify multiple values) in themesAndTypes field returned right in this endpoint
//landmarkIds(string)Check for suitable value (separated by comma to specify multiple values) in landmarks field returned right in this endpoint
//guestRatingMin(number)Check for suitable min rating in filters/guestRating/range/min field returned right in this endpoint
//sortOrder(string)One of the following is allowed BEST_SELLER|STAR_RATING_HIGHEST_FIRST|STAR_RATING_LOWEST_FIRST|DISTANCE_FROM_LANDMARK|GUEST_RATING|PRICE_HIGHEST_FIRST|PRICE
//loc(string) The language code should be left as en_US or not used for our purposes


//Query string needs completing from parameters above, will need to be taken from user selection.
fetch("https://hotels4.p.rapidapi.com/properties/list?", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "652a2de92cmsh43a2bf88c4f4751p196d97jsnfa734ca7135b",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//get property details
//REQUIRED PARAMETER
//id(number) The value of id field that returned in hotels query above
//OPTIONAL PARAMETERS
//checkIn(string) check in date MUST BE IN FORMAT yyyy-MM-dd
//checkOut(string) check out date MUST BE IN FORMAT yyyy-MM-dd
//currency(string) The currency code
//adults1(number) The number of adults in first room
//children1(string) The age of every children separated by comma in the first room. Ex : 5,11
//loc(string) The language code should be left as en_US or not used for our purposes


//Query string needs completing from parameters above, will need to be taken from user selection.
fetch("https://hotels4.p.rapidapi.com/properties/get-details?", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "652a2de92cmsh43a2bf88c4f4751p196d97jsnfa734ca7135b",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//Get Hotel Photo
//REQUIRED PARAMETER
//id(number) The value of id field that returned in hotels query above

//complete with hotel code to display photos
fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "652a2de92cmsh43a2bf88c4f4751p196d97jsnfa734ca7135b",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//Get hotel reviews
//REQUIRED PARAMETERS
//id(number) The value of id field that returned in hotels query above
//OPTIONAL PARAMETERS
//page(number) paging purposes, probably not needed
//loc(string) The language code should be left as en_US or not used for our purposes


//complete string with id parameter
fetch("https://hotels4.p.rapidapi.com/reviews/list?", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "652a2de92cmsh43a2bf88c4f4751p196d97jsnfa734ca7135b",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});