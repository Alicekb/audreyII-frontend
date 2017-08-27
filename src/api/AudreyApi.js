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
  getData(id, url, token) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
    return fetch(url + id, {
      method: 'get',
      headers: headers
    }).then(parseRes)
  },
  addMeals(id, meal, token) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
    const { name, recipe, calories, ingredients } = meal
    const body = JSON.stringify({
      meal: {
        name: name,
        recipe: recipe,
        calories: calories,
        day_id: id,
        ingredients: ingredients
      }
    })

    return fetch(`https://audrey-api.herokuapp.com/v1/meals`, {
      method: 'post',
      headers: headers,
      body: body
    }).then(parseRes)
  },
  deleteMeals(id, token) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
    return fetch(`https://audrey-api.herokuapp.com/v1/meals/${id}`, {
      method: 'delete',
      headers: headers
    }).then(parseRes)
  },
  createWeek(id, token) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
    return fetch(`https://audrey-api.herokuapp.com/v1/weeks`, {
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        week: {
          calendar_id: id
        }
      })
    }).then(parseRes)
  }
}
