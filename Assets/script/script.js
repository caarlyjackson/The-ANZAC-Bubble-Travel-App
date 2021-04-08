//hero screen
var heroButton = document.querySelector(".custom-btn");
var landingPage = document.querySelector(".hero");

// hides landing page on button click
heroButton.addEventListener("click", function(){
    landingPage.style.display = "none";
});