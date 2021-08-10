

let question = [
    {
        quest: "Which team won the World Cup in 1938?",

        answer: {
            a: 'Italy',
            b: 'Germany',
            c: 'Spain',
            d: 'France',
        },
        correctAnswer: 'a'
    },
    {
        quest: "Which player won the Ballon D'or in 2003?",

        answer: {
            a: 'Pavel Nedved',
            b: 'Zinadine Zidane',
            c: 'Ronaldo',
            d: 'Luis Figo'
        },
        correctAnswer: 'a'
    }
]
function showQuestion(){
    let randomQuestion = Math.floor(Math.random()*question.length);

}
totalQuestionSpan.innerHTML = question.length
    
    


showQuestion(question);

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

let i=0;
while (i<1000) {
    SVGAnimatedNumberList.push(Math.floor(Math.random()*1000));
    i++;
};

let table = document.createElement('table');
table.id = 'random-numbers';

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
let tboy = table.getElementsByTagName('tbody')[0];
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