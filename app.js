const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleBtnClick() {
  console.dir(loginInput);
  console.log("click!!!");
}

loginButton.addEventListener("click", handleBtnClick);
