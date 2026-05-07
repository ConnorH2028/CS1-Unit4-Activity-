// Crate a boolean variable to track the mode
let darkMode = false;

/* NEW JS FUNCTION: document.querrySelector()
    lets you select an HTML lement and store
    the reference in a variable for JS to use
*/

const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
// CONST is like LET, but the value won't change

// JS can now change attributes & properties!
heading.textContent = "Light & Dark Website"; // JS wrote HTML code!
heading.style.color = "white"; // JS wrote CSS code!

// Define what happens when buttoon is clicked
function toggleMode() {
    console.log("triggered function");
    // 1. Flip the boolean to reflect the mode
    darkMode = !darkMode;
    console.log(darkMode);
    // 2. Conditionaly apply styles based on mode
    if (darkMode == true) {
        console.log("apply dark styles");
        body.style.background = "black";
        heading.style.color = "white";
        description.style.color ="white";
        description.textContent = "Welcome to the dark side! 🌑";
        toggleBtn.textContent = "Switch to Light";
        toggleBtn.style.background = "black";
        toggleBtn.style.color = "white";
        toggleBtn.style.borderColor = "white";
    }
    else {
        console.log("apply light styles");
        body.style.background = "white";
        heading.style.color = "black";
        description.style.color = "black";
        description.textContent = "Welcome to the light side! ☀️";
        toggleBtn.textContent = "Switch to Dark";
        toggleBtn.style.background = "white";
        toggleBtn.style.color = "black";
        toggleBtn.style.borderColor = "black";
    }

}
// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);