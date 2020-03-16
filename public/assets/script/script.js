console.log("working");






let overlayBlur = document.querySelector(".overlay-blur");
let form = document.getElementById('mForm');
let showProfileButton = document.querySelector(".button");
let addBlur = document.querySelector(".add-blur");
let submitButton = document.getElementById('submit');
let dislikeButton = document.getElementsByClassName("dislike");






/* showProfileButton.addEventListener("mousedown", function () {
    overlayBlur.style.opacity = "0.1";



});

showProfileButton.addEventListener("mouseup", function () {
    overlayBlur.style.opacity = "1.2";


}); */


console.log("submit button", submitButton)
const formHandler = async (e) => {
    e.preventDefault();
    try {

        const body = {
            profileName: document.getElementById("firstname").value,
            profileAge: document.getElementById("age").value,
            profileCity: document.getElementById("city").value,
            profileDiscription: document.getElementById("message").value,

        }

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const res = await fetch("http://localhost:3000/api/newProfile", {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        })

        const data = await res.json();

        console.log("DATA FROM SERVER", data);

    } catch (err) {
        console.error("Error sending the form data", err)
    }

}

//  oplossen | lege data versturen is nu nog mogelijk..
submitButton.addEventListener('click', formHandler)










