// console.log("working");

let overlayBlur = document.querySelector(".overlay-blur");
let showProfileButton = document.querySelector(".button");
let addBlur = document.querySelector(".add-blur");

 


showProfileButton.addEventListener("mousedown", function () {
    overlayBlur.style.opacity = "0.1";



});

showProfileButton.addEventListener("mouseup", function () {
    overlayBlur.style.opacity = "1.2";



});

