"use strict";
const qa=[
           {
            question: "What is the largest land animal?",
            answer: "Elephant"
        },
        {
            question: "Which animal is known as the king of the jungle?",
            answer: "Lion"
        },
        {
            question: "What mammal can fly?",
            answer: "Bat"
        },
        {
            question: "Which animal is famous for its black and white stripes?",
            answer: "Zebra"
        },
        {
            question: "What is the fastest land animal?",
            answer: "Cheetah"
        }
];
let currentQuestion= 0;
let score= 0;
console.log(qa[0].question);
document.getElementById("question").innerHTML= qa[0].question;

let submitButton= document.getElementById("submit");
let result= document.getElementById("result");

submitButton.addEventListener("click",function(){
    const selected = document.querySelector('input[name="option"]:checked');
     console.log(selected.value);
     if (selected.value == qa[currentQuestion].answer){
        console.log("correct");
        increaseScore();
        nextQuestion();
        updateQuestion();
     }
     else{
        console.log("incorrect");
        decreaseScore();
        nextQuestion();
        updateQuestion();
     }

});

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion ==qa.length){
        currentQuestion = 0;
    }
}

function updateQuestion(){
    document.getElementById("question").innerHTML= qa[currentQuestion].question;
}

function increaseScore(){
    score++;
    result.innerHTML= "Correct Score: " + score;

}

function decreaseScore(){
    score--;
    result.innerHTML= "Incorrect Score: " + score;

}