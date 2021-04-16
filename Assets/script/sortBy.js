//sort by
var sortByValue = document.querySelector("#sortOrder").value;
const cardsArray = Array.from(document.querySelector(".card"));

// ALTERNATIVE A
var minPrice = data.body.sortResults.options[3].choices[1];
var maxPrice = data.body.sortResults.options[3].choices[0];
var guestRatingMinToMax = data.body.sortResults.options[3].choices[1];
var guestRatingMaxToMin = data.body.sortResults.options[3].choices[0];

// Value of rating ALTERNATIVE B
var guestRating = data.body.searchResults.results[i].guestReviews.rating;

//sort by
var sortByOne = [""];
var numbers1 = [4, 2, 5, 1, 3];
numbers1.sort(function (a, b) {
    return a - b;
});
console.log(numbers1);// [1, 2, 3, 4, 5]

// SOrt By

var sortOrderEl = document.querySelector("#sortOrder");
function sortOrderEl(sortByValue) {
    if (sortByValue === "priceMin") {
        cards.sort(function (a, b) { return a - b });
    }
    if (sortByValue === "priceMax") {
        maxPrice.sort(function (b, a) { return b - a });
    }
    if (sortByValue === "guestRatingMinToMax") {
        guestRatingMinToMax.sort(function (a, b) { return a - b });
    }

    // VALUE
    if (sortByValue === "guestRatingMinToMax") {
        guestRating.sort(function (a, b) { return a - b });
    }
    if (sortByValue === "guestRatingMaxToMin") {
        guestRating.sort(function (b, a) { return b - a });
    }
}

