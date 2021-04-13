var userDetailsBtn = document.querySelector("#user-details-btn");
var submitUserDetails = document.querySelector("#user-details");

var userNameEl = document.querySelector("#name");
var userEmailEl = document.querySelector("#email");
var userMobileEl = document.querySelector("#mobile");

var userName;
var userEmail;
var userMobile;

function inputUserDetails() {
    document.querySelector(".modal-title").textContent = "User Details"
    $("#myModal").modal();
}

function handleUserDetails(event) {
    event.preventDefault();
    if (userNameEl.value === null) {
        submitUserDetails.disabled = true;
    } else {
        userName = userNameEl.value;
    }

    userEmail = userEmailEl.value;
    userMobile = userMobileEl.value;

    console.log(userName);
    console.log(userEmail);
    console.log(userMobile);
}
userDetailsBtn.addEventListener("click", inputUserDetails);
submitUserDetails.addEventListener("submit", handleUserDetails)