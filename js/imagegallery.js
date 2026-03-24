"use strict";

let galleryClass = document.querySelectorAll(".imageGallery");

for (let i = 0; i < galleryClass.length; i++) {
    galleryClass[i].style.display = "none";
}

let currentImage = 0;
galleryClass[currentImage].style.display = "block";

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous");
let startButton = document.getElementById("start");

let autoCycleActive = false;
let cycleInterval;

nextButton.addEventListener("click", function () {
    galleryClass[currentImage].style.display = "none";
    currentImage++;

    if (currentImage == galleryClass.length) {
        currentImage = 0;
    }

    galleryClass[currentImage].style.display = "block";
});

prevButton.addEventListener("click", function () {
    galleryClass[currentImage].style.display = "none";
    currentImage--;

    if (currentImage == -1) {
        currentImage = galleryClass.length - 1;
    }

    galleryClass[currentImage].style.display = "block";
});

startButton.addEventListener("click", function () {
    if (autoCycleActive == false) {
        autoCycleActive = true;

        cycleInterval = setInterval(function () {
            galleryClass[currentImage].style.display = "none";
            currentImage++;

            if (currentImage == galleryClass.length) {
                currentImage = 0;
            }

            galleryClass[currentImage].style.display = "block";
        }, 3000);
    }
});