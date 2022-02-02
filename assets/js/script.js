var startingPage = document.getElementById("page");
var questionBox = document.getElementById('questions');
var submitButton = document.getElementById('submit');
var scoreCorrect = document.getElementById("score");
var scoreWrong = document.getElementById("incorrect"); 
var answerBox = document.getElementsByClassName("answ");
var answer1 = document.getElementById("opt0");
var answer2 = document.getElementById("opt1");
var answer3 = document.getElementById("opt2");
var answer4 = document.getElementById("opt3");
var questionCount = 0;
var playerChoice = "";

/**
 * Displaying the quiz questions
 */

let QuizBox = [
    {
        question: "Which team won the World Cup in 1938?",
        
        answers: ["Italy", "Germany", "Spain", "France"],

        correctAnswer: ["Italy"]
    },
    {
        question: "Which player won the Ballon D'or in 2003?",

        answers: ["Pavel Nedved", "Zinadine Zidane", "Ronaldo", "Luis Figo"],

        correctAnswer: ["Pavel Nedved"]
    },
    {
        question: "Where did Cristiano Ronaldo play at 2007?",

        answers: ["Real Madrid", "Sporting Lisboan", "Juventus", "Manchester United"],

        correctAnswer: ["Manchester United"]
    }
];
let gameQuestion = [...QuizBox];

let answer = gameQuestion[questionCount].correctAnswer;
let choices = QuizBox[questionCount].answers;

submitButton.addEventListener("click", beginGame);

function beginGame() {
    questionCount++;
    displayQuestion();
}

function displayQuestion(questionCount) {
    // The code random to schuffle question is from code institute lavo math javascript project
    let schuffleQuestion = Math.floor(Math.random() * QuizBox.length);
    questionBox.textContent = QuizBox[schuffleQuestion].question;
    for(let q=0; q<answerBox.length; q++){
        answerBox[q].textContent = QuizBox[schuffleQuestion].answers[q];
       
        answer1.onclick = function() {
            if(answer==choices[0]){
                console.log("good");
                questionCount++;
                next(questionCount);
            }
            else{
                console.log("wrong");
            }
        };
        
        answer2.onclick = function() {
            if(answer==choices[1]){
                console.log("good");
            }
            else{
                console.log("wrong");
            }
        };
        
        answer3.onclick = function() {
            if(answer==choices[2]){
                console.log("good");
            }
            else{
                console.log("wrong");
            }
        };
        
        answer4.onclick = function() {
            if(answer==choices[3]){
                console.log("good");
            }
            else{
                console.log("wrong");
            }
        };
    };
    submitButton.addEventListener("click", next);
};

/**
 *  Eventlistener button "next"
 *  run displayQuestion function
 */

function next() {
    submitButton.addEventListener("click", displayQuestion);
    displayQuestion();
}
next();
