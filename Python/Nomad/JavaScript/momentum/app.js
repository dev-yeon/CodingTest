const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was Clicked!");
}
// title.style.color = "blue";
title.addEventListener("click", handleTitleClick);