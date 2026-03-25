// changing background colour on click
let berry = document.getElementById("berry");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

berry.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightpink";
});

blue.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

green.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgreen";
});



// click.js
"use strict";

let pinkClickBox = document.getElementById("pinkClick");
let showButton = document.getElementById("show");
let showHideBox = document.getElementById("boxToShow");

// add base style class
pinkClickBox.classList.add("clickBox");

// click event
pinkClickBox.addEventListener("click", function () {
    document.body.classList.add("purpleBackground");
    pinkClickBox.classList.add("clickedBox");
});

// hover events
pinkClickBox.addEventListener("mouseover", function () {
    pinkClickBox.classList.add("hoverBox");
});

pinkClickBox.addEventListener("mouseout", function () {
    pinkClickBox.classList.remove("hoverBox");
});

// show button
showButton.addEventListener("click", function () {
    showHideBox.classList.add("visibleBox");
});



// debug
"use strict";

let message = "It's 3pm Somewhere!";
console.log(message);
alert(message);

document.querySelector("#heading").innerText = message;
document.getElementById("heading").innerText = message;


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


//change header 2 size
let style = document.createElement("style");

style.innerHTML = `
.bigText {
    font-size: 40px;
    color: blue;
}
`;

document.head.appendChild(style);

let heading = document.querySelector("h2");
heading.classList.add("bigText");
