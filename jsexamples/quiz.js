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
let currentQuestion= nextQuestion();
let score= 0;
console.log(qa[0].question);
document.getElementById("question").innerHTML= currentQuestion.question;

let submitButton= document.getElementById("submit");
let result= document.getElementById("result");

submitButton.addEventListener("click",function(){
     if (checkAnswer () == true){
        console.log("correct");
        increaseScore();
        currentQuestion = nextQuestion();
        updateQuestion();
     }
     else{
        console.log("incorrect");
        decreaseScore();
        currentQuestion = nextQuestion();
        updateQuestion();
     }

});

function checkAnswer(){
    const selected = document.querySelector('input[name="option"]:checked');
     console.log(selected.value);
     if (selected.value == currentQuestion.answer){
        return true;
     }
    else{
        return false;
    }

}

function nextQuestion(){
    if (qa.length > 0){
        return qa.pop();
    }
    else {
        return null;
    }
}

function updateQuestion(){
    document.getElementById("question").innerHTML= currentQuestion.question;
}

function increaseScore(){
    score++;
    result.innerHTML= "Correct Score: " + score;
    setTimeout(clearResult(), 3000);

}

function decreaseScore(){
    score--;
    result.innerHTML= "Incorrect Score: " + score;
    setTimeout(clearResult(), 3000);

}

function clearResult(){
    document.getElementById("result").innerHTML= " ";
}