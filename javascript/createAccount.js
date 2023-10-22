function passwordShowHide() {
  let password = document.getElementById("password");
  let passwordChecker = document.getElementById("show");
  let showButton = document.getElementById("show");

  if (password.type === "password") {
    password.type = "text";
    showButton.textContent = "Hide";
  } else {
    password.type = "password";
    showButton.textContent = "Show";
  }
}

function passwordShowHideRee() {
  let password = document.getElementById("ree-password");
  let passwordChecker = document.getElementById("ree-show");
  let showButtonRee = document.getElementById("ree-show");

  if (password.type === "password") {
    password.type = "text";
    showButtonRee.textContent = "Show";
  } else {
    password.type = "password";
    showButtonRee.textContent = "Hide";
  }
}

function passwordChecker() {
  let password = document.getElementById("password");
  let reepassword = document.getElementById("ree-password");
  let errorElement = document.getElementById('passwprd-match-error');

  if (password.value != reepassword.value) {
    reepassword.setCustomValidity("Passwords Don't Match");
    errorElement.textContent = "Password Didn't Match";
    errorElement.style.color = 'red';
  } else {
    reepassword.setCustomValidity("");
    errorElement.textContent = "";

  }
}
