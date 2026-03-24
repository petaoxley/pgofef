// changing background colour on click
let berry = document.getElementById("berry");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

document.getElementById("green").addEventListener("click", function() {
  alert("You clicked the green can!");
}, false);

document.getElementById("berry").addEventListener("click", function() {
  alert("You clicked the berry can!");
}, false);

document.getElementById("blue").addEventListener("click", function() {
  alert("You clicked the blue can!");
}, true);


// click.js
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

// debug
"use strict";

let message = "It's 3pm Somewhere!";
console.log(message);
alert(message);

document.querySelector("#heading").innerText = message;
document.getElementById("heading").innerText = message;

// image gallery
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

// looping objects
"use strict";
let layout = [
    {
        width: "100px",
        height: "100px",
        color: "blue",
        h1: "hello",
        paragraph: "This is random text"

    }
]
let output = document.getElementById ("output");

layout.forEach (element => {
    let newDiv = document.createElement ("div");
    newDiv.style.width = element.width;
    newDiv.style.height = element.height;
    newDiv.style.backgroundColor = element.backgroundColor;
    let h1Tag = document.createElement ("h1");
    h1Tag.innerHTML = element.h1;
    let pTag= document.createElement("p");
    pTag.innerHTML = element.paragraph;
    newDiv.append (h1Tag,pTag);
    output.append(newDiv);
})

// tabs
"use strict";

let tabContent = document.querySelectorAll(".tabcontent");
console.log(tabContent.length);

for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
}

tabContent.forEach(tab => {
    tab.style.display = "none";
});

// let london = document.getElementById("London");

// london.addEventListener("click", function(){
//     console.log(london.innerHTML);
// });

let tablinks = document.querySelectorAll(".tablinks");
tablinks.forEach(button => {
    button.addEventListener("click", function () {
        //console.log(button.innerHTML);
        tabContent.forEach(tab => {
            tab.style.display = "none";
        });
        let currentButton = button.innerHTML;
        document.getElementById(currentButton).style.display = "block";
    });
});
