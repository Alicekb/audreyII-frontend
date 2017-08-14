import edamunApi from '../api/EdamunApi'

const searchRequest = () => {
  return {
    type: 'SEARCH_REQUEST'
  }
}

const searchSuccess = results => {
  return {
    type: 'SEARCH_SUCCESS',
    results: results
  }
}

const searchFailure = errors => {
  return {
    type: 'SEARCH_FAILURE',
    errors: errors
  }
}

const searchReset = () => {
  return {
    type: 'SEARCH_RESET'
  }
}

export const requestMeals = search => {
  return dispatch => {
    dispatch(searchRequest())
    return edamunApi
      .searchMeals(search)
      .then(res => {
        const results = res.hits.map(meal => {
          return {
            name: meal.recipe.label,
            uri: meal.recipe.uri
          }
        })
        dispatch(searchSuccess(results))
      })
      .catch(error => {
        dispatch(searchFailure(error))
      })
  }
}

export const resetSearch = () => {
  return dispatch => {
    dispatch(searchReset())
  }
}
