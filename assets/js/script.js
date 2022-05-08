var startingPage = document.getElementById("gamestart");
var questionBox = document.getElementById('questions');
var submitButton = document.getElementById('submit');
var scoreCorrect = document.getElementById("score");
var scoreWrong = document.getElementById("incorrect"); 
var answerBox = document.getElementsByClassName("answ");
var answer1 = document.getElementById("opt0");
var answer2 = document.getElementById("opt1");
var answer3 = document.getElementById("opt2");
var answer4 = document.getElementById("opt3");
var openingGame = document.getElementById("starting");
var endGame = document.getElementById("start");
var startButton = document.getElementById("startGame");
var resultBox = document.getElementById("result");
var questionCount = 0;
var scorePlus = 0;
var scoreMinus = 0;



/**
 *  The quiz questions, answers and correctanswers
 */

let QuizBox = [
    {
        question: "Which team won the World Cup in 1938?",
        
        answers: ["Italy", "Germany", "Spain", "France"],

        correctAnswer: "Italy"
    },
    {
        question: "Which player won the Ballon D'or in 2003?",

        answers: ["Pavel Nedved", "Zinadine Zidane", "Ronaldo", "Luis Figo"],

        correctAnswer: "Pavel Nedved"
    },
    {
        question: "Where did Cristiano Ronaldo play at 2007?",

        answers: ["Real Madrid", "Sporting Lisboan", "Juventus", "Manchester United"],

        correctAnswer: "Manchester United"
    },
    {
        question: "Who did not play with Kaka in Ac Milan in 2006? ",

        answers: ["Clarence Seedorf", "Andrea Pirlo", "Filippo Inzaghi", "Ronaldinho"],

        correctAnswer: "Ronaldinho"
    },
    {
        question: "Which team won the Premier League in 2008? ",

        answers: ["Chelsea", "Manchester City", "Manchester United", "Arsenal"],

        correctAnswer: "Manchester United"
    },
    {
        question: "Which brand sponsored Marco Di Vaio? ",

        answers: ["Puma", "Nike", "Adidas", "Mizuno"],

        correctAnswer: "Nike"
    },
    {
        question: "Which team won the most champions league? ",

        answers: ["Bayern Munchen", "Milan", "Liverpool", "Barcelona"],

        correctAnswer: "Milan"
    },
    {
        question: "Which team won the most Premier League? ",

        answers: ["Manchester United", "Chelsea", "Liverpool", "Arsenal"],

        correctAnswer: "Manchester United"
    },
    {
        question: "Which team won the most Serie A? ",

        answers: ["Juventus", "Milan", "Lazio", "Inter Milan"],

        correctAnswer: "Juventus"
    },
    {
        question: "Which player won Champions League with 3 different team? ",

        answers: ["Zinadine Zidane", "Clarence Seedorf", "Michael Laudrup", "Ronaldo"],

        correctAnswer: "Clarence Seedorf"
    },
    {
        question: "Who won Champions League as a player and a coach too? ",

        answers: ["Jurgen Klopp", "Carlo Ancelotti", "Thomas Tuchel", "Antonio Conte"],

        correctAnswer: "Carlo Ancelotti"
    }
];

submitButton.addEventListener("click", newGame);
submitButton.style.visibility = "hidden";
startButton.addEventListener("click", openGame);
resultBox.style.visibility = "hidden";
endGame.style.visibility = "hidden";


function openGame() {
    startButton.style.visibility = "hidden";
    openingGame.style.visibility ="hidden";
    resultBox.style.visibility = "visible";
    endGame.style.visibility = "hidden";
    beginGame();
}


/** 
 * begingame function is launching the questions
 * answers, hiding opening message and new game button
*/
function beginGame() {
    if (questionCount<10){
        submitButton.style.visibility = "hidden";
        startButton.style.visibility = "hidden";
        openingGame.style.visibility = "hidden";
        displayQuestion();
    }
    else{
        submitButton.style.visibility = "visible";
        startButton.style.visibility = "hidden";
        openingGame.style.visibility = "hidden";
        endGame.style.visibility = "visible";
        displayQuestion();
    }
};

function newGame() {
    openGame();
    submitButton.style.visibility = "visible";
    
};

/**
 *  DisplayQuestion function, displaying the questions,
 *  schuffle them, they will come up in a random order
 *  also checking if the answer is correct or not
 *  questions are not repeting in the game
 */

function displayQuestion(questionCount) {
    // The code random to schuffle question is from code institute love math javascript project
    let schuffleQuestion = Math.floor(Math.random() * QuizBox.length);
    questionBox.textContent = QuizBox[schuffleQuestion].question;
    for(let q=0; q<answerBox.length; q++){
        answerBox[q].textContent = QuizBox[schuffleQuestion].answers[q];
        
        answer1.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[0]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;
            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            QuizBox.splice(schuffleQuestion, 1);
            next();
        };
        
        answer2.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[1]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;
            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            QuizBox.splice(schuffleQuestion, 1);
            next();

        };
        
        answer3.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[2]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;

            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            QuizBox.splice(schuffleQuestion, 1);
            next();

        };
        
        answer4.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[3]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;

            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            QuizBox.splice(schuffleQuestion, 1);
            next();

        };
    
    };

};


/**
 *  Function next, check if all question`s been answered
 *  to run displayQuestion function
 *  display and of game message
 *  allerts array with messages for winning or losing.
 */

let alerts = [
    {win: "Congratulations! You have a good football knwoledge!",
    lose: "Sorry you lost, but don't give up!"}
];

function next() {
    displayQuestion();
    questionCount++;
    if (questionCount==10){
        console.log("end")
        if(scorePlus>scoreMinus){
            endGame.textContent = alerts[0].win;
            endGame.style.visibility = "visible";
        }
        else{
            endGame.textContent = alerts[0].lose;
            endGame.style.visibility = "visible";
        };
        submitButton.style.visibility = "visible";
        newGame();
    }
    else{
        console.log("continue")
    };
};