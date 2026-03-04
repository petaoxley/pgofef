"use strict";

let galleryClass = document.querySelectorAll(".imageGallery");
console.log(galleryClass);
console.log(galleryClass.length);

//one variable grouping the 3 items , but creating a class
//first item starts at 0 , arrays

// will set the display to remove, the image won't show up

//galleryClass[0].style.display = "none";
// galleryClass[1].style.display = "none";
// galleryClass[2].style.display = "none";

//can use the same pattern for one and two
// make more efficient 
// for loop- lets you iterate through a number range
// looks like this

// for (let i = 0; i < 10; i++ ){
//    console.log(i);
// }

for (let i = 0; i <galleryClass.length; i++ ){
    galleryClass[i].style.display = "none";

}

let currentImage = 0;
galleryClass[currentImage].style.display = "block";

let nextButton = document.getElementById("next");

nextButton.addEventListener("click", function (){
    galleryClass[currentImage].style.display = "none";
    currentImage = currentImage + 1;
    if(currentImage ==galleryClass.length){
        currentImage= 0;}
    galleryClass[currentImage].style.display = "block";

    // this will allow you to cycle through the images after reaching the last image in the loop
    //previous button coding
    let prevButton = document.getElementById ("previous");
    prevButton.addEventListener("click", function () {
        galleryClass[currentImage].style.display = "none";
        currentImage = currentImage - 1;
        if (currentImage == -1){
            currentImage = galleryClass.length - 1;
        }
        galleryClass[currentImage].style.display = "block";

    })
    
});

//showing gallery through a play system, with images changing

let startButton = document.getElementById ("start");

let autoCycleActive= false;
let cycleInterval;

startButton.addEventListener ("click", function (){
    if(autoCycleActive == false){
        autoCycleActive = true;
        cycleInterval = setInterval(function(){}, 
        3000));

    })

}