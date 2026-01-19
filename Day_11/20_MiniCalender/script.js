const monthName = document.querySelector('#month-name')
const dayName = document.querySelector('#day-name')
const dayNumber = document.querySelector('#day-number')
const year = document.querySelector('#year')


const date = new Date();

monthName.innerHTML = date.toLocaleString("en",{
    month: "long",
})


dayName.innerHTML = date.toLocaleString("en",{
    weekday: "long",
})

dayNumber.innerHTML = date.getDate();

year.innerHTML = date.getFullYear()

