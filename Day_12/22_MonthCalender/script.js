const monthEl = document.querySelector('.date h1');
const fullDateEl = document.querySelector('.date p');
const daysEl = document.querySelector('.days');

let monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(),monthIndex + 1 ,0).getDate();
const firstDay = new Date(new Date().getFullYear(),monthIndex , 1).getDay();
console.log(firstDay)
const date = new Date();

monthEl.innerHTML = date.toLocaleString("en",{
    month: "long",
})
fullDateEl.innerHTML = new Date().toDateString();


let days = "";

for(let i = firstDay; i>0 ; i-- ){
    days += `<div class = "empty"></div>`
}

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}
daysEl.innerHTML = days;
