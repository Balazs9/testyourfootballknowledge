// wait for the DOM to finish loading the game
// get the button elements and add event listeners to the

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute('question-container') === 'submit') {
                checkAnswer();
            }
            else {
                let questType = this.getAttribute("question-container");
                startFootball(questType);
            }
        });
    }
    document.getElementById('btn').addEventListener('keydown', function(event) {
        if(event.key === "Enter") {
            checkAnswer();
        }
    });
    startFootball(question);
},

/**
 * main game loop, called when the game script is loaded
 * and after the gamer answers has been processed
 */


function startFootball() {
    let startButton = document.getElementById('start-btn');
    let nextButton = document.getElementById('next-btn');
    let questionContainer = document.getElementById('question');
    let questionElement = document.getElementById('questions');
    console.log('started');
    setNextQuestion();


},

function checkAnswer() {

},

function correctAnswer() {

},

/**
 * gets the current score from DOM and increment by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;    
},
/**
 * gets the current incorrect answer from DOM and increment by 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
        document.getElementById('incorrect').innerText = ++oldScore; 
},

var questions = [
    {
        question: "Which team won the World Cup in 1938?",

        answer: {
            a: 'Italy',
            b: 'Germany',
            c: 'Spain',
            d: 'France',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which player won the Ballon D'or in 2003?",

        answer: {
            a: 'Pavel Nedved',
            b: 'Zinadine Zidane',
            c: 'Ronaldo',
            d: 'Luis Figo'
        },
        correctAnswer: 'a'
    }
];