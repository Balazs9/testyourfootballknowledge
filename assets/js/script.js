document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

        for (let button of buttons) {
            button.addEventListener('click', function() {
                if (this.getAttribute("data-type") === "submit") {
                    showQuestions();
                }
                else {
                    let questType = this.getAttribute("data-type");
                    showQuestions(questType);
                }
            })
        }
    document.getElementById
})
function generateQuestion(questions, quizBox, resultsBox, submitButton) {

    function showQuestions(questions, quizBox) {
        
        let footballQuestions = [

            {
                question: "Which country won the World Cup in 1938?",

                answers: {
                    a: 'Italy',
                    b: 'France',
                    c: 'Spain',
                },
                correctAnswer: 'a'
            },

            {
                question: "Which team won the Champions League in 1994?",

                answers: {
                    a: 'Barcelona',
                    b: 'Marseille',
                    c: 'Milan',
                },
                correctAnswer: 'c'
            },

            {
                question: "Who won the Ballon D'or in 2003?",

                answers: {
                    a: 'Pavel Nedved',
                    b: 'Ronaldo',
                    c: 'Zidane',

                },
                correctAnswer: 'a'
            },

            {
                question: "Which 2 team played the Champions League final in 1996?",

                answers: {
                    a: 'Real Madrid and Ajax',
                    b: 'Juventus and Borussia Dortmund',
                    c: 'Monaco and Manchester United',
                },
                correctAnswer: 'b'
            },

            {
                question: "Where did Cristiano Ronaldo play in 2003?",

                answers: {
                    a: 'Manchester United',
                    b: 'Sporting Lisbon',
                    c: 'Real Madrid',
                },
                correctAnswer: 'a'
            },

            {
                question: "Which sportbrand was the sponsor of Paulo Dybala at 2015?",

                answers: {
                    a: 'Nike',
                    b: 'Adidas',
                    c: 'Puma',
                },
                correctAnswer: 'a'
            }
        ];
        let output = [];
        let answers;
        }
        
    }

    let quizBox = document.getElementsByClassName('questions');
    let resultsBox = document.getElementById('answers');
    let submitButton = document.getElementById('submit');

    function showresults(questions, quizBox, resultsBox) {
        let gamerAnswer = document.getElementById()
    }

    // show the questions

    showQuestions(questions, quizBox);

    // when gamer clicks submit, will get the results

    submitButton.onclick = function() {
        showresults(questions, quizBox, resultsBox);
}
}