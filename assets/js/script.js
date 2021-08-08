let questions = [
    {
        question: "Which team won the World Cup in 1938?",

        answer: {
            a: 'Italy',
            b: 'Germany',
            c: 'Spain',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which player won the Ballon D'or in 2003?",

        answer: {
            a: 'Pavel Nedved',
            b: 'Zinadine Zidane',
            c: 'Ronaldo',
        },
        correctAnswer: 'a'
    }
]
let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainer = document.getElementById('question-container');
let questionElement = document.getElementById('questions')
let answerElement = document.getElementById('answer-button')

startButton.addEventListener('click', startButton);
let showQuestions = questions.length;
function startFootball() {
    console.log('started');
    setNextQuestion();


}

function setNextQuestion(questions) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        if (answer.correct) {
            alert("Hey! well done!");
        }
        else {
            alert("Sorry, wrong answer!")
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
    
}

function selectAnswer() {

}
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