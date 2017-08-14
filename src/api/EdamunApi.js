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
  searchMeals(query) {
    return fetch(
      `https://api.edamam.com/search?q=${query}&app_id=c4ee5e52&app_key=20febab47902d47feb3f2421d8af6d4c&to=30`,
      {
        method: 'get'
      }
    ).then(parseRes)
  },
  searchMeal(uri) {
    const id = uri.replace(/#/i, '%23')
    return fetch(
      `https://api.edamam.com/search?r=${id}&app_key=20febab47902d47feb3f2421d8af6d4c`,
      {
        method: 'get'
      }
    ).then(res => {
      return res.json().then(json => {
        if (!res.ok) {
          return Promise.reject(json.errors)
        }
        const ingredientsArray = json[0].ingredients.map(ingredient => {
          return ingredient.food
        })
        const meal = {
          ingredients: ingredientsArray,
          calories: json[0].calories,
          recipe: json[0].url
        }
        return meal
      })
    })
  }
}
