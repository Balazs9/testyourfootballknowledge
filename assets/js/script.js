const questionBox = document.getElementById('questions');
const resultsBox = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit');
const scoreCorrect = document.getElementById("score");
const scoreWrong = document.getElementById("incorrect"); 
const answerBox = document.getElementsByClassName("answ");
const answer1 = document.getElementById("opt0");
const answer2 = document.getElementById("opt1");
const answer3 = document.getElementById("opt2");
const answer4 = document.getElementById("opt3");
const startingPage = 0;
const questNumber = 4;

/*
answer1.onclick = function(event) {
    console.log(event);
    if (answer1==question.correctAnwser) {
        console.log(answ1);
    };
}
answer2.onclick = function(event) {
    console.log(event);
}
answer3.onclick = function(event) {
    console.log(event);
}
answer4.onclick = function(event) {
    console.log(event);
}


submitButton.addEventListener("click", displayQuestion);
*/
/**
 * Displaying the quiz questions
 */

let question = [
    {
        questions: "Which team won the World Cup in 1938?",
        
        answers: ["Italy", "Germany", "Spain", "France"],

        correctAnswer: "Italy"
    },
    {
        questions: "Which player won the Ballon D'or in 2003?",

        answers: ['Pavel Nedved', 'Zinadine Zidane', 'Ronaldo', 'Luis Figo'],

        correctAnswer: "Pavel Nedved"
    }
]
/*
function displayQuestion() {
    console.log("start");
    questionBox.textContent = question[q].questeions;


    answer1.textContent = question[0].answ1;
    answer2.textContent = question[0].answ2;
    answer3.textContent = question[0].answ3;
    answer4.textContent = question[0].answ4;
}
displayQuestion();


function displayAnswers() {
    answerBox.textContent = question[0].answers;
}
displayAnswers();
*/
submitButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    console.log("begin");
    for(var q in question){
        console.log(question[q]);
        for(var a in question[q].answers){
            console.log("hello");
            let correct=question[q].correct;
            if(a==correct){
                
                console.log("good");
            }
            else {
                console.log("wrong");
            }
        }
    }
}
nextQuestion();