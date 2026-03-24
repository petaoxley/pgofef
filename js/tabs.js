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