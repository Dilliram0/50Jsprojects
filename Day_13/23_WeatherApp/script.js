const inputBox = document.querySelector('#input-box');
const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#wind-speed');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');


async function checkWeather(city) {
    const api_key = "f2827db4f546677c6753c642569d5ddf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const weatherData = await fetch(`${url}`)
        .then(response => response.json());


    if (weatherData.cod === '404') {
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error");
        return;
    }

    weatherBody.style.display = "flex";
    locationNotFound.style.display = "none";



    temperature.innerHTML = `${Math.floor((weatherData.main.temp) - 273)}°C`
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${Math.floor(weatherData.wind.speed * 2.6) }km/hr`

    console.log(weatherData.weather[0].main);

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "./assets/cloud .png";
            break;
        case 'Clear':
            weatherImg.src = "./assets/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "./assets/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "./assets/mist.png";
            break;
        case 'Thunder':
            weatherImg.src = "./assets/thunder.png";
            break;
        case 'Snow':
            weatherImg.src = "./assets/snow.png";
            break;

        default:
            weatherImg.src = "./assets/cloud .png";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
});

inputBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkWeather(inputBox.value);
    }
});