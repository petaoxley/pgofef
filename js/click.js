"use strict";

let redClickBox = document.getElementById("redClick");

redClickBox.classList.add("clickBox");

redClickBox.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "blueviolet";
    redClickBox.style.backgroundColor = "orange";
});

redClickBox.addEventListener("mouseover", function () {
    redClickBox.style.backgroundColor = "rgba(0,128,0,0.75)";
});

redClickBox.addEventListener("mouseout", function () {
    redClickBox.style.backgroundColor = "red";
});

let showButton = document.getElementById("show");
let showHideBox = document.getElementById("boxToShow");

showButton.addEventListener("click", function () {
    showHideBox.style.visibility = "visible";
});
