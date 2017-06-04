import audreyApi from '../api/AudreyApi';

const weekRequest = () => {
  return {
    type: 'WEEK_REQUEST',
  }
}

const weekSuccess = (days, ingredients) => {
  return {
    type: 'WEEK_SUCCESS',
    days: days,
    ingredients: ingredients
  }
}

const weekFailure = (errors) => {
  return {
    type: 'WEEK_FAILURE',
    errors: errors
  }
}

const weekReset = () => {
  return {
    type: 'WEEK_RESET'
  }
}

export const fetchWeek = (id, url, token) => {
  return dispatch => {
    dispatch(weekRequest())
    return audreyApi.getData(id, url, token)
      .then(res => {
        const { days, meals } = res
        const ingredientsArray = meals.map((meal) => { return meal.ingredients })
        const ingredients = ingredientsArray.reduce((a, b) => { return a.concat(b)}, []);
        dispatch(weekSuccess(days, ingredients))
      })
      .catch(error => {
        dispatch(weekFailure(error))
      })
  }
}

export const resetWeek = () => {
  return dispatch => {
    dispatch(weekReset())
  }
}