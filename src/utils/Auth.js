const baseUrl = 'http://localhost:3001';

export function signUp() {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, avatar, email, password})
  })
  .then(res => res.json())
}

export function signIn() {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
}
