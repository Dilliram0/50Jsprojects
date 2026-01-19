const dayEl = document.querySelector('#day')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

const newYearDate = new Date("1 Jan, 2027 00:00:00").getTime();

calculateTime();

function calculateTime() {

    const currentDate = Date.now();
    const timeLeft = newYearDate - currentDate;

    const dayLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
    const minutesLeft = Math.floor(timeLeft / (1000 * 60) % 60);
    const secondsLeft = Math.floor(timeLeft / (1000) % 60);

    dayEl.textContent = String(dayLeft).padStart(2, '0')
    hoursEl.textContent = String(hoursLeft).padStart(2, '0')
    minutesEl.textContent = String(minutesLeft).padStart(2, '0')
    secondsEl.textContent = String(secondsLeft).padStart(2, '0')

    setInterval(calculateTime, 1000)
}


