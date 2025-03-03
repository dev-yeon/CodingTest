const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello, ${username} Keepgoing!`; 
  greeting.classList.remove(HIDDEN_CLASSNAME)

}

loginForm.addEventListener("submit" , onLoginSubmit);

const savedUsername = localStorage.getItem("username");

console.log(savedUsername);
if(savedUsername === null) {
  // show the form 
} else {
  // show the greetings 
}