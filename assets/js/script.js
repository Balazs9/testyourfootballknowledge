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
            }

            {
                questions: "Which team won the Champions League in 1994?",

                answers: {
                    a: 'Barcelona',
                    b: 'Marseille',
                    c: 'Milan',
                },
                correctAnswer: 'c'
            }

            {
                questions: "Who won the Ballon D'or in 2003?",

                answers: {
                    a: 'Pavel Nedved',
                    b: 'Ronaldo',
                    c: 'Zidane',

                },
                correctAnswer: 'a'
            }

            {
                questions: "Which 2 team played the Champions League final in 1996?",

                answers: {
                    a: 'Real Madrid and Ajax',
                    b: 'Juventus and Borussia Dortmund',
                    c: 'Monaco and Manchester United',
                },
                correctAnswer: 'b'
            }

            {
                questions: "Where did Cristiano Ronaldo play in 2003?",

                answers: {
                    a: 'Manchester United',
                    b: 'Sporting Lisbon',
                    c: 'Real Madrid',
                },
                correctAnswer: 'a'
            }

            {
                questions: "Which sportbrand was the sponsor of Paulo Dybala at 2015?",

                answers: {
                    a: 'Nike',
                    b: 'Adidas',
                    c: 'Puma',
                },
                correctAnswer: 'a'
            }
        ]
        let output = [];
        let answers;

        if ()

    }

    function showresults(questions, quizBox, resultsBox) {

    }

    // show the questions

    showQuestions(questions, quizBox);

    // when gamer clicks submit, will get the results

    submitButton.onclick = function() {
        showresults(questions, quizBox, resultsBox);
}
}