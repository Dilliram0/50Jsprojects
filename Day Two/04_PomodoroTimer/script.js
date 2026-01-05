const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const timer = document.querySelector('#timer');

let interval;
let timeLeft = 3000;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2,"0")}  : ${seconds.toString().padStart(2,"0")}`;

    timer.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            alert("Time is UP!!!")
            clearInterval(interval);
            timeLeft = 3000;
            updateTimer();
        }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    timeLeft = 3000;
    clearInterval(interval);
    updateTimer();
}

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);