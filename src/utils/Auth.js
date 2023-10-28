const baseUrl = 'http://localhost:3001';

export function signUp({name, avatar, email, password}) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, avatar, email, password})
  })
  .then(res => res.json())
  .then(data => console.log(data))
}

export function signIn({email, password}) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({email, password})
  })
}

export function verifyToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
}

export function updateUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
}
