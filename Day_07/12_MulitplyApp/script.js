const question = document.querySelector('#question');
const input = document.querySelector('#input');
const score = document.querySelector('#scoreval');
const form = document.querySelector('#form');

let scoreVal = 0;
let randomNum;
let randomNumTwo;


function generateQuestion() {
    randomNum = Math.floor(Math.random() * 10);
    randomNumTwo = Math.floor(Math.random() * 10);

    question.innerHTML = (`What is ${randomNum} Multiply by ${randomNumTwo}?`);
}

generateQuestion();


form.addEventListener('submit', checkAnswer);

function checkAnswer(e) {
    e.preventDefault();
    let userAnswer = Number(input.value);
    if (randomNum * randomNumTwo === userAnswer) {
        console.log(`User is Correct`);
        scoreVal++;

    }
    else {
        console.log(`User is Wrong`);
        scoreVal--;
    }
    score.innerHTML = scoreVal;
    input.value = '';

    generateQuestion();
}