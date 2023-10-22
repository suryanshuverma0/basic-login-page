function clickToSend(){
         let email= document.getElementById('email').value;
         if(email==""){
                  alert("Please enter your Email");
         }else{
                  confirm("Email will be sent to reset password");
                  alert("Email sent successfully");
         }
}

