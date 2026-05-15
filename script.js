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
const image = document.querySelector("#image");
const emoji = document.querySelector("#emoji");
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
        heading.textContent = "Light & Dark Website";
        description.style.color ="white";
        description.textContent = "Welcome to the dark side! 🌑";
        toggleBtn.textContent = "Switch to Light";
        toggleBtn.style.background = "black";
        toggleBtn.style.color = "white";
        toggleBtn.style.borderColor = "white";
        jojoBtn.style.background = "black";
        jojoBtn.style.color = "white";
        jojoBtn.style.borderColor = "white";
        jojoBtn.textContent ="What are you doing?";
        hackerBtn.style.background = "black";
        hackerBtn.style.color = "white";
        hackerBtn.style.borderColor = "white";
        hackerBtn.textContent = "Hacker Mode";
        emoji.classList.remove("animated");
        image.src = "Symbiote_suit-removebg-preview.png";
    }
    else {
        console.log("apply light styles");
        body.style.background = "white";
        heading.style.color = "black";
        heading.textContent = "Light & Dark Website";
        description.style.color = "black";
        description.textContent = "Welcome to the light side! ☀️";
        toggleBtn.textContent = "Switch to Dark";
        toggleBtn.style.background = "white";
        toggleBtn.style.color = "black";
        toggleBtn.style.borderColor = "black";
        jojoBtn.style.background = "white";
        jojoBtn.style.color = "black";
        jojoBtn.style.borderColor = "black";
        jojoBtn.textContent ="What are you doing?";
        hackerBtn.style.background = "white";
        hackerBtn.style.color = "black";
        hackerBtn.style.borderColor = "black";
        hackerBtn.textContent = "Hacker Mode";
        emoji.classList.remove("animated");
        image.src = "Spider_man-removebg-preview.png";
    }

}
// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);


// REVIEW
// 1. Select an element to target (button)
const hackerBtn = document.querySelector("#hacker");
// 2. Attach function to the button
hackerBtn.addEventListener("click", setHacker);
// 3. Define what happens when triggered
function setHacker() {
    body.style.background = "black";
    body.style.fontFamily = "monospace";
    description.style.color = "rgb(0,160,8)";
    description.textContent = "YOU GOT HACKED ;)";
    image.src = "Error.jpg";
    heading.textContent = "Un Oh";
    heading.style.color = "rgb(0,160,8)";
    toggleBtn.style.background = "black";
    toggleBtn.style.color = "rgb(0,160,8)";
    toggleBtn.style.borderColor = "black";
    toggleBtn.textContent = "Switch Mode";
    jojoBtn.style.background = "black";
    jojoBtn.style.color = "rgb(0,160,8)";
    jojoBtn.style.borderColor = "black";
    jojoBtn.textContent ="What are you doing?";
    hackerBtn.style.background = "black";
    hackerBtn.style.color = "rgb(0,160,8)";
    hackerBtn.style.borderColor = "black";
    hackerBtn.textContent = "Hacker Mode";
    //ATTACH ANIMATIONS using class names:
    emoji.classList.add("animated");
}

const jojoBtn = document.querySelector("#jojo");

jojoBtn.addEventListener("click", setJojo)

function setJojo() {
    body.style.backgroundImage ='url("jojo go.gif")';
    heading.textContent = "ほほ。。。";
    heading.style.color = "Gold";
    description.textContent = "向かった来るのか";
    description.style.color = "Gold";
    image.src = "Jojo meme.jpg";
    toggleBtn.style.background = "black";
    toggleBtn.style.color = "gold";
    toggleBtn.textContent = "切り替える";
    toggleBtn.style.borderColor = "black";
    jojoBtn.style.background = "black";
    jojoBtn.style.color = "gold";
    jojoBtn.style.borderColor = "black";
    jojoBtn.textContent = "やれやれだぜ";
    hackerBtn.style.background = "black";
    hackerBtn.style.color = "gold";
    hackerBtn.style.borderColor = "black";
    hackerBtn.textContent ="ハッカーモード";
    emoji.classList.remove("animated");

}