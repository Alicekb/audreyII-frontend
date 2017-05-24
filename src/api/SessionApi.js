import fetch from 'isomorphic-fetch'

const NEW_URL = 'http://localhost:3001/signup'
const AUTH_URL = 'http://localhost:3001/auth_user'

const parseRes = (res) => {
  return res.json()
    .then(json => {
      if (!res.ok) {
        return Promise.reject(json.errors)
      }
      return json
    })
}

export default {
  new(userData) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify({user: userData})

    return fetch(NEW_URL, {
      method: 'post',
      headers: headers,
      body: body
    }).then(parseRes)
    .catch(error => console.log(error));
  },

  auth(userData) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(userData)
    return fetch(AUTH_URL, {
      method: 'post',
      headers: headers,
      body: body
    }).then(parseRes)
    .catch(error => console.log(error));
  }
}