"use strict"

const city = document.querySelector('#city');
//Put your key from openweather.com
const key = "******************";
const icon = document.querySelector('#icon');
const weather = document.querySelector('#weather');
const button = document.querySelector('#button');

function getWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${key}`,
    {method: 'GET'})
    .then(response => response.json())
    .then(json => {
        icon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
        weather.innerHTML = `${json.weather[0].description} (${json.main.temp} <sup>o</sup>C)`
    })
    .catch(error => {
        icon.src = "";
        weather.innerHTML = "Not available city";
    })
}

button.addEventListener('click', ()=> {
    getWeather();
})



