// wait for the DOM to finish loading the game
// get the button elements and add event listeners to the



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

let question = [
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
]
let showQuestions = []
function showQuestions() {
    while(showQuestions.length<=10) {
        
    }
    
}

showQuestion(question);