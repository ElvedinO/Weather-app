'use strict';

const apiKey = 'f30145686b984190baa8cf2446afa97a';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const getLocation = document.querySelector('.btn');
const cityInput = document.querySelector('.city-value');

const weatherIcon = document.querySelector('.conditions-img');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector('.location').innerHTML = data.name;
  document.querySelector('.temperature').innerHTML =
    Math.trunc(data.main.temp) + '°c';
  document.querySelector('.humidity-value').innerHTML =
    data.main.humidity + '%';
  document.querySelector('.wind-value').innerHTML =
    Math.trunc(data.wind.speed) + ' km/h';
  if (data.weather[0].main == 'Clear') {
    weatherIcon.src = 'images/clear.png';
  } else if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = 'images/clouds.png';
  } else if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
  } else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = 'images/mist.png';
  } else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = 'images/rain.png';
  } else if (data.weather[0].main == 'Snow') {
    weatherIcon.src = 'images/snow.png';
  }
  document.querySelector('.weather').classList.remove('d-none');
  document.querySelector('.weather').classList.add('d-flex');
}

getLocation.addEventListener('click', () => {
  checkWeather(cityInput.value);
});
