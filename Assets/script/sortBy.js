//sort by - global
var sortByValue = document.querySelector("#sortOrder").value;
const cardsArray = Array.from(document.querySelector(".card"));

// ALTERNATIVE A
var minPrice = data.body.sortResults.options[3].choices[1];
var maxPrice = data.body.sortResults.options[3].choices[0];
var guestRatingMinToMax = data.body.sortResults.options[3].choices[1];
var guestRatingMaxToMin = data.body.sortResults.options[3].choices[0];

// Value of rating - ALTERNATIVE B
var guestRating = data.body.searchResults.results[i].guestReviews.rating;



//sort by - EXAMPLE I FOUND ONLINE
var sortByOne = [""];
var numbers1 = [4, 2, 5, 1, 3];
numbers1.sort(function (a, b) {
    return a - b;
});
console.log(numbers1);// [1, 2, 3, 4, 5]



// beginning of code...
var sortOrderEl = document.querySelector("#sortOrder");
function sortOrderEl(sortByValue) {
    if (sortByValue === "priceMin") {
        priceMin.sort(function (a, b) {
            var priceA = (cardA.ratePlan.price.current).slice(1)
            var priceB = (cardB.ratePlan.price.current).slice(1)
            return priceA - priceB;
        });
    }
    if (sortByValue === "priceMax") {
        priceMax.sort(function (b, a) {
            var priceA = (cardA.ratePlan.price.current).slice(1)
            var priceB = (cardB.ratePlan.price.current).slice(1)
            return priceB - priceA;
        });
    }
    if (sortByValue === "guestRatingMinToMax") {
        guestRatingMinToMax.sort(function (cardA, cardB) {
            var priceA = parseFloat(cardA.guestReviews.rating)
            var priceB = parseFloat(cardB.guestReviews.rating)
            return priceA - priceB;
        });
    }

    if (sortByValue === "guestRatingMaxToMin") {
        guestRatingMaxToMin.sort(function (cardB, cardA) {
            var priceA = parseFloat(cardA.guestReviews.rating)
            var priceB = parseFloat(cardB.guestReviews.rating)
            return priceB - priceA;
        });
    }
}

