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
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
const selectedBtn = e.target;
const isCorrect=selectedBtn.dataset.correct==="true";
if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;

    }
  else {
    selectedBtn.classList.add("incorrect")
  }   
  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct==="true") {
        button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}

nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length - 1){
        handleNextButton();
    } else {
        startQuiz();
    }
})

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
    nextButton.innerHTML="Play Again";
    nextButton.style.display = "block";
}

startQuiz();