const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
  event.preventDefault();
  // const username = loginInput.value;
  // console.log(event);
  console.log(loginInput.value);
}

loginForm.addEventListener("submit" , onLoginSubmit)
