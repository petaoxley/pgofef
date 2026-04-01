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

button.addEventListener("click", function () {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "black"
            ? "#050505"
            : "black";
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
