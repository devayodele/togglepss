const icon = document.getElementById("togglePsw");
const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');

icon.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (password.value && username.value) {
    alert("This is a demo form, no form was submited!");
  } else if (!username.value && password.value) {
    alert("Please enter your username");
  } else if (username.value && !password.value) {
    alert("Please enter your password");
  } else {
    alert("Please fill all the required fields");
  }
});
