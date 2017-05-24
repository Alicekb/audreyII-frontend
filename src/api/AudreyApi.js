import fetch from 'isomorphic-fetch'

const GET_CALENDAR = 'http://localhost:3001/v1/calendars/'

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
  getCal(id, token) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token
    }
    return fetch(GET_CALENDAR + id, {
      method: 'get',
      headers: headers,
    }).then(parseRes)
  }
}