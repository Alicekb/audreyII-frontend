import fetch from 'isomorphic-fetch'

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
  getData(id, url, token) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token
    }
    return fetch(url + id, {
      method: 'get',
      headers: headers,
    }).then(parseRes)
  }
}