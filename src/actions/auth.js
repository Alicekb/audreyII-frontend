import { reset, SubmissionError } from 'redux-form';
import sessionApi from '../api/SessionApi';

const authRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST',
  }
}

const authSuccess = (user, token) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors: errors
  }
}

export const signup = (userData) => {
  return dispatch => {
    dispatch(authRequest())
    return sessionApi.new(userData)
      .then(res => {
        return sessionApi.auth(res)
          .then(res => {
            const { user, auth_token} = res
            localStorage.setItem('token', auth_token)
            dispatch(authSuccess(user, auth_token))
            dispatch(reset('signup'))
          })
          .catch(error => {
            dispatch(authFailure(error))
            throw new SubmissionError(error)
          })
      })
      .catch(error => {
        console.log(error)
        dispatch(authFailure(error))
        throw new SubmissionError(error)
      })
  }
}

export const login = (userData) => {
  return dispatch => {
    dispatch(authRequest())
    return sessionApi.auth(userData)
      .then(res => {
        const { user, auth_token} = res
        localStorage.setItem('token', auth_token)        
        dispatch(authSuccess(user, auth_token))
        dispatch(reset('login'))
      })
      .catch(error => {
        dispatch(authFailure(error))
        throw new SubmissionError(error)
      })
  }
}