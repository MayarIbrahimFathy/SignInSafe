var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
    document.getElementById("userName").textContent = loggedInUser;
} else {

}
