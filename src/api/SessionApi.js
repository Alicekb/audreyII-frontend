import fetch from 'isomorphic-fetch'

const NEW_URL = 'https://audrey-api.herokuapp.com/signup'
const AUTH_URL = 'https://audrey-api.herokuapp.com/auth_user'
const TOKEN_URL = 'https://audrey-api.herokuapp.com/auth_token'

const parseRes = res => {
  return res.json().then(json => {
    if (!res.ok) {
      return Promise.reject(json.errors)
    }
    return json
  })
}

export default {
  new(userData) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify({ user: userData })

    return fetch(NEW_URL, {
      method: 'post',
      headers: headers,
      body: body
    })
      .then(parseRes)
      .catch(error => console.log(error))
  },

  auth(userData) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(userData)
    return fetch(AUTH_URL, {
      method: 'post',
      headers: headers,
      body: body
    })
      .then(parseRes)
      .catch(error => console.log(error))
  },

  refresh(userToken) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: userToken
    }
    return fetch(TOKEN_URL, {
      method: 'get',
      headers: headers
    })
      .then(parseRes)
      .catch(error => console.log(error))
  }
}
