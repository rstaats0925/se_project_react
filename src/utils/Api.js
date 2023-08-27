import React from 'react';
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
const baseUrl = 'http://localhost:3001';

const latitude = 41.978050;
const longitude = -91.669861;
const APIkey = "aec2c819324155eb39246a231740e274";

function checkResponse (response) {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(`Error: ${response.status}`);
  }
}

export function getForcastWeather () {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then(res => {
      return checkResponse(res);
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
    return checkResponse(res);
  })
}

export function postItems (item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    return checkResponse(res);
  })
}

// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;