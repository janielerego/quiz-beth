const $startGameButton = document.querySelector(".start");
const $questionsContainer = document.querySelector(".questions-container");
const $answersContainer = document.querySelector(".answers-container");
const $questionText = document.querySelector(".question");

// $startGameButton.addEventListener("click", startGame);

// let currentQuestionIndex = 0;

// function startGame() {
//     $startGameButton.classList.add("hide");
//     $questionsContainer.classList.remove("hide");
//     displayNextQuestion();
// }

// function displayNextQuestion() {
//     while ($answersContainer.firstChild) {
//         $answersContainer.removeChild($answersContainer.firstChild);
//     }

//     $questionText.textContent = questions[currentQuestionIndex].question;
// }

// const questions = [
//     {
//         question: "O que significa 'mesa' em inglês?",
//         answers: [
//             { text: "DOG", correct: false },
//             { text: "CAT", correct: false },
//             { text: "TABLE", correct: true },
//             { text: "CHAIR", correct: false },
//         ],
//     },
// ];
