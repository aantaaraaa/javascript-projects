
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === "" ||
    confirmPasswordInput.value === ""
  ) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields!";
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
  } else {
    message.style.color = "green";
    message.textContent = "Registration successful!";
  }
});
