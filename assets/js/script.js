const questionBox = document.getElementById('questions');
const resultsBox = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit');
const scoreCorrect = document.getElementById("score");
const scoreWrong = document.getElementById("incoreect"); 
const answerBox = document.getElementsByClassName("answ");
const answer1 = document.getElementById("opt0");
const answer2 = document.getElementById("opt1");
const answer3 = document.getElementById("opt2");
const answer4 = document.getElementById("opt3");
const startingPage = 0;


answer1.onclick = function(event) {
    console.log(event);
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

/**
 * Displaying the quiz questions
 */
let question = [
    {
        quest: "Which team won the World Cup in 1938?",

        answ1: "Italy",
        answ2: "Germany",
        answ3: "Spain",
        answ4: "France",

        correctAnswer: "Italy"
    },
    {
        quest: "Which player won the Ballon D'or in 2003?",

        answ1: 'Pavel Nedved',
        answ2: 'Zinadine Zidane',
        answ3: 'Ronaldo',
        answ4: 'Luis Figo',

        correctAnswer: "Pavel Nedved"
    }
]


for(i=0; i<question.quest.length; i++) {
    if(question[i].answers<question.answers.length){
        console.log(question.answers);
    };
}

function schuffleQuestion() {

}

function displayQuestion() {
    console.log("start");
    questionBox.textContent = question[0].quest;
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

function nextQuestion() {
    for (let question in question.quest.length) {
        if (question <= question.quest.length) {
            return question;
        }
        else {
            return "game over";
        }
    }
};
nextQuestion();

