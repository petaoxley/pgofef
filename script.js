// 1. CLICK TO EXPAND EVENT INFO
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function () {
        let text = this.querySelector("p");
        text.classList.toggle("hidden");
    });
});

// 2. BACKGROUND COLOR TOGGLE
let button = document.getElementById("colorToggle");

let colors = ["black", "rgb(20,0,40)", "rgb(0,40,40)", "rgb(40,0,20)"];
let index = 0;

button.addEventListener("click", function () {
    index = (index + 1) % colors.length;
    document.body.style.backgroundColor = colors[index];
});


// 3. HOVER GLOW EFFECT (JS CONTROLLED)
cards.forEach(card => {
    card.addEventListener("mouseover", function () {
        this.style.boxShadow = "0 0 30px rgb(255, 0, 150)";
    });

    card.addEventListener("mouseout", function () {
        this.style.boxShadow = "0 0 20px rgb(0, 200, 255)";
    });
});

// DJ LINEUP CLICK REVEAL
let djs = document.querySelectorAll(".dj");

djs.forEach(dj => {
    dj.addEventListener("click", function () {
        let info = this.querySelector(".dj-info");
        info.classList.toggle("hidden");
    });
});
