import audreyApi from '../api/audreyApi';

const weekRequest = () => {
  return {
    type: 'WEEK_REQUEST',
  }
}

const weekSuccess = (days) => {
  return {
    type: 'WEEK_SUCCESS',
    days: days,
  }
}

const weekFailure = (errors) => {
  return {
    type: 'WEEK_FAILURE',
    errors: errors
  }
}

export const fetchWeek = (id, token) => {
  return dispatch => {
    dispatch(weekRequest())
    return audreyApi.getWeek(id, token)
      .then(res => {
        const { days } = res      
        dispatch(weekSuccess(days))
      })
      .catch(error => {
        dispatch(authFailure(error))
        throw new SubmissionError(error)
      })
  }
}
