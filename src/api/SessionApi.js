import fetch from 'isomorphic-fetch'

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

    return fetch('https://audrey-api.herokuapp.com/signup', {
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
    return fetch('https://audrey-api.herokuapp.com/auth_user', {
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
    return fetch('https://audrey-api.herokuapp.com/auth_token', {
      method: 'get',
      headers: headers
    })
      .then(parseRes)
      .catch(error => console.log(error))
  }
}
