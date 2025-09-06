const form = document.getElementById("loginForm");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(userName.value == "" || password.value == ""){
        message.textContent = "Please fill in all fields";
    }else if(userName.value == "admin" && password.value == "1234"){
        message.style.color = "green";
        message.textContent = "Login successfull";
    }else{
        message.style.color = "red";
        message.textContent = "Invalid username or password."
    }
});