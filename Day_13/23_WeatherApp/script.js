const inputBox = document.querySelector('#input-box');
const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed');


async function checkWeather(city){
    const api_key = "f2827db4f546677c6753c642569d5ddf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    

    const weatherData = await fetch(`${url}`).then(response =>
        response.json());

        console.log(weatherData);
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value)
})