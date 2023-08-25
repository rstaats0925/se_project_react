import React from 'react';
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
const baseUrl = 'http://localhost:3001';

const latitude = 41.978050;
const longitude = -91.669861;
const APIkey = "aec2c819324155eb39246a231740e274";

export function getForcastWeather () {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })

    return weatherApi;
}

export function parseWeatherData(data) {
  const weather = {temperature: {
    F: `${Math.round(data.main.temp)}`,
    C: `${Math.round((data.main.temp - 32) * 5/9)}`
  }};

  return weather.temperature;
}

export function getItems () {
  return fetch(`${baseUrl}/items`)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  })
}

// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;