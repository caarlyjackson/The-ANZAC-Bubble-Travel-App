//hero screen
var heroButton = document.querySelector(".custom-btn");
var landingPage = document.querySelector(".hero");
//small header
var smallHeader = document.querySelector("#pageHeader");
//initial select page
var selectPage = document.querySelector("#select-options");

heroButton.addEventListener("click", function () {
	landingPage.style.display = "none";
	selectPage.style.display = "block";
	smallHeader.style.display = "block";
});

// Parameter Page - More Options - collapse/hide and show
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var button = document.getElementById("button-show")
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
			(content.style.maxHeight)
			content.style.maxHeight = null;
		} else {
			content.style.display = "block";
			content.style.maxHeight = content.scrollHeight + "px";
			// button.style.display = "none";
		}
	});
}

// Need to build parameter verification(string, number)



	// match city text to id

	var city = document.getElementById('loc').value;
	if(city == 'Auckland'){destinationId=950540}
	else if (city =='Wellington'){destinationId=951308}
	else if (city == 'Christchurch') {destinationId=1636970}
	else if (city == 'Queenstown') {destinationid=1633614}
	else if (city == 'Rotorua') {destinationId=1633616}
	else if (city == 'Bay of Islands'){destinationId=1640249}
	else if (city == 'Auckland Central Business District'){destinationId=1645372}
	else if (city == 'Te Anau'){destinationId=950424}
	else {destinationId=950155};
	console.log(destinationId)

	

	function searchHotels() {
		//searches hotels in city by city code obtained above
		//Need to match user selection to reponse value to obtain hotel code for the below
		//REQUIRED PARAMETERS:
		//destinationId(number) City code
		//pageNumber(number) The page number in which data is display, removed as field, set at 1
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

		//Basic string with required parameters
		var requiredString = "https://hotels4.p.rapidapi.com/properties/list?destinationId=" + destinationId + '&pagenumber=1&checkIn=' + checkIn + '&checkOut=' + checkOut + '&pageSize=' + pageSize + '&adults1=' + adults1

		//addOptions(requiredString)

		//Optional parameter select string building
		function addOptions() {
			var children1 = document.getElementById('children1').value;
			var currency = document.getElementById('currency').value;
			var priceMin = document.getElementById('priceMin').value;
			var amenityIds = document.getElementById('amenityIds').value;
			var themeIds = document.getElementById('themeIds').value;
			var landmarkIds = document.getElementById('landmarkIds').value;
			var guestRatingMin = document.getElementById('guestRatingMin').value;
			var sortOrder = document.getElementById('sortOrder').value;
			var loc = document.getElementById('loc').value;

			var url = requiredString;

			if (children1) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'children1=' + children1;
			}
			if (currency) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'currency=' + currency;
			}
			if (priceMin) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'priceMin=' + priceMin;
			}
			if (amenityIds) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'amenityIds=' + amenityIds;
			}
			if (themeIds) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'themeIds=' + themeIds;
			}
			if (guestRatingMin) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'guestRatingMins=' + guestRatingMin;
			}
			if (landmarkIds) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'landmarkIds=' + landmarkIds;
			}
			if (sortOrder) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'sortOrder=' + sortOrder;
			}
			if (loc) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'locs=' + loc;
			}
			return url
		}
							  //url
		var hotelSearchQuery = requiredString

		//Fetch hotel listing.
		fetch(hotelSearchQuery, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "c6aa062b9amsh42c409cede2d9bep1e5e77jsnbca33b5d4fcc",
				"x-rapidapi-host": "hotels4.p.rapidapi.com"
			}
		})

		.then(function (response) {
			return response.json();
		  })
		
		.then(function (data) {
			console.log(data);
		})
	};



	function getPropDetails() {
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

		//Basic string with required parameters
		var requiredString = "https://hotels4.p.rapidapi.com/properties/get-details?id=" + Id

		addOptions(requiredString)

		//Optional parameter select string building
		function addOptions() {
			var adults1 = document.getElementById('adults1').value;
			var children1 = document.getElementById('children1').value;
			var currency = document.getElementById('currency').value;
			var checkIn = document.getElementById('checkIn').value;
			var checkOut = document.getElementById('checkOut').value;
			var loc = document.getElementById('loc').value;

			var url = requiredString;

			if (adults1) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'adults1=' + adults1;
			}

			if (children1) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'children1=' + children1;
			}
			if (currency) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'currency=' + currency;
			}
			if (checkIn) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'checkIn=' + checkIn;
			}
			if (checkOut) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'checkOut=' + checkOut;
			}
			if (loc) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'locs=' + loc;
			}
			return url
		}
		var getDetails = url

		//Query string needs completing from parameters above, will need to be taken from user selection.
		fetch(getDetails, {
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
	};

	

	function getPhotos() {

		//Get Hotel Photo
		//REQUIRED PARAMETER
		//id(number) The value of id field that returned in hotels query above

		//Fetch Photos
		fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?&id=" + Id, {
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
	};

	
	function getReviewsList() {
		//Get hotel reviews
		//REQUIRED PARAMETERS
		//id(number) The value of id field that returned in hotels query above
		//OPTIONAL PARAMETERS
		//page(number) paging purposes, probably not needed
		//loc(string) The language code should be left as en_US or not used for our purposes

		//Basic string with required parameters
		var requiredString = "https://hotels4.p.rapidapi.com/reviews/list?id=" + id

		addOptions(requiredString)

		//Optional parameter select string building
		function addOptions() {
			var page = document.getElementById('page').value;
			var loc = document.getElementById('loc').value;

			var url = requiredString;

			if (page) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'page=' + page;
			}
			if (loc) {
				if (indexOf(url, '?') !== false) {
					var symbol_insert = '&';
				} else {
					var symbol_insert = '?';
				}
				url = url + symbol_insert + 'locs=' + loc;
			}
			return url
		}

		var getReviews = url

		//Fetch Reviews List
		fetch(getReviews, {
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
		};	

	var button = document.getElementById('button')
	button.addEventListener("click", function(event){
		searchHotels(destinationId, checkIn, checkOut, pageSize, adults1);
		event.preventDefault();
		
	},false);
	
