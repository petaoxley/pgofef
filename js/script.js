"use strict";

/* Background color change from gallery items */
document.querySelectorAll(".berry").forEach(el =>
    el.addEventListener("click", () =>
        document.body.style.backgroundColor = "lightpink"
    )
);

document.querySelectorAll(".blue").forEach(el =>
    el.addEventListener("click", () =>
        document.body.style.backgroundColor = "lightblue"
    )
);

document.querySelectorAll(".green").forEach(el =>
    el.addEventListener("click", () =>
        document.body.style.backgroundColor = "lightgreen"
    )
);

/* Click boxes / nav links */
document.querySelectorAll(".pinkClick").forEach(box => {

    box.addEventListener("click", function () {
        document.body.classList.add("purpleBackground");
        this.classList.add("clickedBox");
    });

    box.addEventListener("mouseover", function () {
        this.classList.add("hoverBox");
    });

    box.addEventListener("mouseout", function () {
        this.classList.remove("hoverBox");
    });

});

/* Show buttons */
document.querySelectorAll(".show").forEach((btn, index) => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".showHideBox")[index]
            .classList.add("visibleBox");
    });
});

/* Hide buttons */
document.querySelectorAll(".hide").forEach((btn, index) => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".showHideBox")[index]
            .classList.remove("visibleBox");
    });
});

/* Toggle buttons */
document.querySelectorAll(".toggle").forEach((btn, index) => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".showHideBox")[index]
            .classList.toggle("visibleBox");
    });
});

/* Debug */
let message = "It's 3pm Somewhere!";
console.log(message);

/* Change H2 size */
document.querySelectorAll("h2").forEach(h =>
    h.classList.add("bigText")
);

document.querySelector("h1").addEventListener("click", function () {
    this.style.color = "hotpink";
});
document.querySelector("h1").addEventListener("click", function () {
    alert("It's 3pm Somewhere!");
});