var userDetailsBtn = document.querySelector("#user-details-btn");
var submitUserDetails = document.querySelector("#user-details");

var userNameEl = document.querySelector("#userNameInput");
var userHomeEl = document.querySelector("#userHomeInput");
var userPostcodeEl = document.querySelector("#userPostcodeInput");
var userEmailEl = document.querySelector("#userEmailInput");
var userMobileEl = document.querySelector("#userPhoneInput");

var userName;
var userHome;
var userPostcode;
var userEmail;
var userMobile;

function inputUserDetails() {
    document.querySelector("#userDetailsModal").textContent = "User Details"
    $("#userDetailsModal").modal();
}

function handleUserDetails(event) {
    event.preventDefault();
    if (userNameEl.value === null) {
        submitUserDetails.disabled = true;
    } else {
        userName = userNameEl.value;
    }

    userHome = userHomeEl.value;
    userPostcode = userPostcodeEl.value;
    userEmail = userEmailEl.value;
    userMobile = userMobileEl.value;

    console.log(userName);
    console.log(userHome);
    console.log(userPostcode);
    console.log(userEmail);
    console.log(userMobile);
}
userDetailsBtn.addEventListener("click", inputUserDetails);
submitUserDetails.addEventListener("submit", handleUserDetails)
