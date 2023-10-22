function redirectToDashboard() {
  window.location.href = "/html/dashboard.html";
}

let password = document.getElementById('password');
let passwordChecker = document.getElementById('show');

passwordChecker.addEventListener("change", ()=>{
    if(password.type==="password"){
        password.type="text";
    }
    else{
      password.type="password";
      password.style.fontSize = "";
    }
});

function validateLogin(){
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if(email === "veenasa676@gmail.com" && password === "1234567890"){
    
  }

}