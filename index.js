document.getElementById("noButton").addEventListener("click",function() {
    let noButton= document.getElementById("noButton");
    let randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    let randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = randomY + "px";
});
document.getElementById("noButton").addEventListener("click",function() {
let yesButton = document.getElementById("yesButton");
let currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
let newFontSize = currentFontSize + 15;

yesButton.style.fontSize = newFontSize + "px";
});