import edamunApi from '../api/EdamunApi';

const searchRequest = () => {
  return {
    type: 'SEARCH_REQUEST',
  }
}

const searchSuccess = (results) => {
  return {
    type: 'SEARCH_SUCCESS',
    results: results
  }
}

const searchFailure = (errors) => {
  return {
    type: 'SEARCH_FAILURE',
    errors: errors
  }
}

export const requestRecipes = (search) => {
  return dispatch => {
    dispatch(searchRequest())
    return edamunApi.searchRecipes(search)
    .then(res => {
      const results = res.hits.map((meal) => {
        return {
          name: meal.recipe.label,
          uri: meal.recipe.uri
        }
      })
      dispatch(weekSuccess(results))
    })
    .catch(error => {
      dispatch(searchFailure(error))
    })

  }
} 