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
  searchRecipes(query) {
    return fetch(`https://api.edamam.com/search?q=${query}&app_id=c4ee5e52&app_key=20febab47902d47feb3f2421d8af6d4c&to=30`,
    {
      method: 'get',
    }).then(parseRes)
  }
}

