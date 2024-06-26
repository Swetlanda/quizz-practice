const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Cat", correct: false },
            { text: "Dog", correct: false },
            { text: "Blue whale", correct: true },
        ]
    },

    {
        question: "Which is the smallest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Cat", correct: false },
            { text: "Dog", correct: false },
            { text: "Mice", correct: true },
        ]
    },

    {
        question: "Which is the capital of the UK?",
        answers: [
            { text: "Dublin", correct: false },
            { text: "Paris", correct: false },
            { text: "Madrid", correct: false },
            { text: "London", correct: true },
        ]
    },

    {
        question: "Which is the most famost Swedish furniture?",
        answers: [
            { text: "Dunelm", correct: false },
            { text: "Ercol", correct: false },
            { text: "B&Q", correct: false },
            { text: "Ikea", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}