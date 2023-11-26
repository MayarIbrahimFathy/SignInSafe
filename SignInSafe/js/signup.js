var fullName = document.getElementById('signInName');
var signInEmail = document.getElementById('signInEmail');
var signInPssword = document.getElementById('signInPssword');
var userNames = [];
if (localStorage.getItem('userNames') == null) {
  userNames = [];
} else {
  userNames = JSON.parse(localStorage.getItem('userNames'));
}
console.log(localStorage.getItem('userNames'));


function addData() {
  if(validateName() === true && validateEmail() === true && validatePassword()=== true){
  var name = {
    name : signInName.value,
    email : signInEmail.value,
    password : signInPssword.value 
  };
  userNames.push(name);
  clear();
  localStorage.setItem('userNames', JSON.stringify(userNames));

  function clear() {
    signInName.value = '',
    signInEmail.value = '',
    signInPssword.value = '';
  }
 }
 else{

 }
}

function validateName(){
  var regex = /^[A-Z][a-z]{2,7} [A-Z][a-z]{2,7}$/;
  if (regex.test(signInName.value)) {
    signInName.style.border = "";
    document.getElementById("wrongName").classList.add("d-none");
    return true;

  }
  else {
    signInName.style.border = "5px solid red";
    document.getElementById("wrongName").classList.remove("d-none");

    return false;
  }
}

function validateEmail(){
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(signInEmail.value)) {
    signInEmail.style.border = "";
    document.getElementById("wrongEmail").classList.add("d-none");
    return true;

  }
  else {
    signInEmail.style.border = "5px solid red";
    document.getElementById("wrongEmail").classList.remove("d-none");

    return false;
  }
}
function validatePassword(){
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,16}$/;
  if (regex.test(signInPssword.value)) {
    signInPssword.style.border = "";
    document.getElementById("wrongPassword").classList.add("d-none");
    return true;

  }
  else {
    signInPssword.style.border = "5px solid red";
    document.getElementById("wrongPassword").classList.remove("d-none");

    return false;
  }
}

