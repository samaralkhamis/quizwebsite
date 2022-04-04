'use strict';

let loginemail=document.getElementById("email");
let emailError=document.getElementById("email-error")
let password=document.getElementById("Password-error")
let loginpass=document.getElementById("password");

function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('formData');
    let parsData=JSON.parse(storageData);


    if (loginemail.value == parsData[0].email){
      emailError.innerHTML="your email is correct";
    
    if(loginpass.value == parsData[0].password){
       
        password.innerHTML="your pass is correct"; 
         document.getElementById("submit").innerHTML="submit";
        window.location.href="../HTML/index.html";
    }
        else{
         password.innerHTML=" your pass is wrong";
        }
       
    }};
       