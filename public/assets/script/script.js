// console.log("working");

let overlayBlur = document.querySelector(".overlay-blur");
let showProfileButton = document.querySelector(".button");
let addBlur = document.querySelector(".add-blur");

let timerID;
let counter = 0;

let pressHoldEvent = new CustomEvent("pressHold");

let pressHoldDuration = 30;

 // Listening for the mouse and touch events    
 showProfileButton.addEventListener("mousedown", pressingDown, false);
 showProfileButton.addEventListener("mouseup", notPressingDown, false);
 showProfileButton.addEventListener("mouseleave", notPressingDown, false);

 showProfileButton.addEventListener("touchstart", pressingDown, false);
 showProfileButton.addEventListener("touchend", notPressingDown, false);

 // Listening for our custom pressHold event
 showProfileButton.addEventListener("pressHold", doSomething, false);


 function pressingDown(e) {
    // Start timing
    requestAnimationFrame(timer);

    e.preventDefault();
    overlayBlur.style.opacity = "0.1";

    console.log("Button is pressed");
  }

  function notPressingDown(e) {
    // Stop the timer
    cancelAnimationFrame(timerID);
    counter = 0;

    console.log("Not pressing");
  }
// Runs at 60fps when you are pressing down
    //
    function timer() {
        console.log("counting");
   
        if (counter < pressHoldDuration) {
          timerID = requestAnimationFrame(timer);
          counter++;
         
        } else {
          console.log("End reached");
          item.dispatchEvent(pressHoldEvent);

        //   document.body.classList.add("addBlur");
        }
      }
   
      function doSomething(e) {
        console.log("pressHold event fired!");
      }




// showProfileButton.addEventListener("mousedown", function () {
//     overlayBlur.style.opacity = "0.1";



// });
