// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
// to run the server use this command: json-server --watch db.json --id _id --port 3001
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
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => {
    return checkResponse(response);
  })
}

export function postItems (item, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    return checkResponse(response);
  })
}

export function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    return checkResponse(response); 
  })
}

export function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(res => checkResponse(res));
}

export function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(res => checkResponse(res));
}