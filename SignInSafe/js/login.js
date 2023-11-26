var signInEmail = document.getElementById('signInEmail');
var signInPssword = document.getElementById('signInPssword');
var userNames = [];

if (localStorage.getItem('userNames') == null) {
    userNames = [];
} else {
    userNames = JSON.parse(localStorage.getItem('userNames'));
}

function confirmData() {
    var email = signInEmail.value;
    var password = signInPssword.value;

    var storedUsers = JSON.parse(localStorage.getItem("userNames"));

    var userFound = false;
    var userName = "";

    for (var i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i].email === email && storedUsers[i].password === password) {
            userFound = true;
            userName = storedUsers[i].name;
            break;
        }
    }

    var loginMessage = document.getElementById("loginMessage");

    if (userFound) {
        loginMessage.classList.replace("text-danger", "text-success");
        loginMessage.textContent = "Login successful";
        localStorage.setItem("loggedInUser", userName); 
        window.location.href = "home.html";
    } else {
        loginMessage.classList.replace("text-success", "text-danger");
        loginMessage.textContent = "Login failed. Please signup first.";
    }
}
