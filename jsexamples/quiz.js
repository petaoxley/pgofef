"use strict";
const qa=[
    {
        question: "What is the largest land animal?",
        answer: "Elephant",
    },
    {
        question:"Which animal is the king of the jungle?",
        answer: "lion",
    }
];
console.log(qa[0].question);
document.getElementById("question").innerHTML= qa[0].question;