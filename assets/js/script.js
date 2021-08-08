let startButton = document.getElementById('start-btn');
let questionContainer = document.getElementById('question-container');
let questionElement = document.getElementById('questions')
let answerElement = document.getElementById('answer-button')

startButton.addEventListener('click', startButton);
let showQuestions = questions.length;
function startFootball() {
    console.log('started');
    setNextQuestion()


}

function setNextQuestion(questions) {
    showQuestions;

}

function selectAnswer() {

}

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