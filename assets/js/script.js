var startingPage = document.getElementById("page");
var questionBox = document.getElementById('questions');
var submitButton = document.getElementById('submit');
var scoreCorrect = document.getElementById("score");
var scoreWrong = document.getElementById("incorrect"); 
var answerBox = document.getElementById("answer");
var answer1 = document.getElementById("opt0");
var answer2 = document.getElementById("opt1");
var answer3 = document.getElementById("opt2");
var answer4 = document.getElementById("opt3");
var questionCount = 0;
var score = 0;


/**
 * Displaying the quiz questions
 */

let QuizBox = [
    {
        question: "Which team won the World Cup in 1938?",
        
        answers: ["Italy", "Germany", "Spain", "France"],

        correctAnswer: "Italy"
    },
    {
        question: "Which player won the Ballon D'or in 2003?",

        answers: ['Pavel Nedved', 'Zinadine Zidane', 'Ronaldo', 'Luis Figo'],

        correctAnswer: "Pavel Nedved"
    }
];

let gameQuestion = QuizBox[questionCount];

console.log(gameQuestion);
function displayQuestion(gameQuestion) {
    questionBox.textContent = gameQuestion.question;
    answer1.textContent = gameQuestion.answers[0];
    answer1.onclick = function() {
        if(gameQuestion.correctAnswer==gameQuestion.answers[0]){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
    answer2.textContent = gameQuestion.answers[1];
    answer2.onclick = function() {
        if(gameQuestion.correctAnswer==gameQuestion.answers[1]){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
    answer3.textContent = gameQuestion.answers[2];
    answer3.onclick = function() {
        if(gameQuestion.correctAnswer==gameQuestion.answers[2]){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
    answer4.textContent = gameQuestion.answers[3];
    answer4.onclick = function() {
        if(gameQuestion.correctAnswer==gameQuestion.answers[3]){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
};

displayQuestion(gameQuestion);
/*
function checkAnswer(displayQuestion) {
    answer1.onclick = function() {
        if(gameQuestion.correctAnswer==){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
    answer2.onclick = function() {
        if(gameQuestion.correctAnswer==answer2){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
    answer3.onclick = function() {
        if(gameQuestion.correctAnswer==answer3){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
    answer4.onclick = function() {
        if(gameQuestion.correctAnswer==answer4){
            console.log("good");
        }
        else{
            console.log("wrong");
        }
    };
}
checkAnswer();
function nextQuestion(displayQuestion) {

}
*/