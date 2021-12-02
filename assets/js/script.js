const questionBox = document.getElementById('questions');
const resultsBox = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit');
const questionNumber = 0;
const scoreCorrect = document.getElementById("score");
const scoreWrong = document.getElementById("incoreect"); 
const answerBox = document.getElementById("answer");
const answer1 = document.getElementById("opt0");
const answer2 = document.getElementById("opt1");
const answer3 = document.getElementById("opt2");
const answer4 = document.getElementById("opt3");

let questionNumb = "";

questionBox.innerHTML = questionNumb;
function start() {
    
}
/*
function game() {
    questionBox.innerText = question.quest;
    
    const answer1 = document.getElementById("opt0");
    const answer2 = document.getElementById("opt1");
    const answer3 = document.getElementById("opt2");
    const answer4 = document.getElementById("opt3");

    answer1.innerText = question.answer[0];
    answer2.innerText = question.answer[1];
    answer3.innerText = question.answer[2];
    answer4.innerText = question.answer[3];

}
*/
let start = game();
/*
function containerQuiz (questionBox){
    let currentQuest = quest.length;
    while (currentQuest > 1) {
    questionBox.innerHTML = Math.floor(Math.random()*quest.length);
    currentQuest -= 1;
    } return quest;
};*/
/* function name() {
    var user = prompt("Please enter your name");
} */
/*function showResults(){}
    containerQuiz();

    submitButton.addEventListener('click', showResults);
*/
/**
 * Displaying the quiz questions
 */
let question = [
    {
        quest: "Which team won the World Cup in 1938?",

        answer: ['Italy', 'Germany', 'Spain', 'France'],
        correctAnswer: 1
    },
    {
        quest: "Which player won the Ballon D'or in 2003?",

        answer: ['Pavel Nedved', 'Zinadine Zidane', 'Ronaldo', 'Luis Figo'],
        correctAnswer: 1
    }
]
/*
function showQuestion(){
    let randomQuestion = Math.floor(Math.random()*question.length);

}
totalQuestionSpan.innerHTML = question.length
    
    

containerQuiz(quest);
showQuestion(question);
*/
/**
 * gets the current score from DOM and increment by 1
 */
 function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;    
}
/**
 * gets the current incorrect answer from DOM and increment by 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
        document.getElementById('incorrect').innerText = ++oldScore; 
}


/**
 * ScoreBoard 
 */
let results =[];
results[score]= incrementScore() + incrementWrongAnswer();
let i=0;
while (i<1000) {
    results.push(Math.floor(Math.random()*1000));
    i++;
};

let table = document.createElement('table');
table.id = 'random-results';

let tableHtml = `
<thead>
    <tr>
        <td>Players #</td>
        <td>Points</td>
    </tr>
</thead>
<tbody>
</tbody>
`;

table.innerHtml = tableHtml;
let tbody = table.getElementsByTagName('tbody')[0];
let tbodyHtml = '';
for (let i=0; i<results.length; i++) {
    tbodyHtml += `
            <tr>
                <td>&{i}</td>
                <td>&{results[i]}</td>
            </tr>
            `
}
tbody.innerHtml = tbodyHtml;
document.body.appendChild(table);

/**
 * sign-in 
 */

function handleSubmit(event) {
    event.preventDefault();
    let user = document.getElementById('username');
    let password = document.getElementById('password');

    console.log('Username:', user.value);
    console.log('Password:', pass.value);
}

let form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit);

let usernames = ["Andy", "Mike", "Rick", "Gigi", "Fede"];

let form = document.getElementById(login-form);
let errorMessage = document.getElementById('errors');

function handleSubmit(event) {
    event.preventDefault();

    let name = form.elements[usernames].value;

    if (usernames.includes(name)) {
        errorMessage.innerHtml = `<p>Sorry, the username ${name} is already in use. Please choose a differenr one. </p>`
        errorMessage.style.display ='block';
    
    }
    else { 
        usernames.push(name);
        form.submit();
    }
}
