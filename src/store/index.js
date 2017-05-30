import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../reducers/auth';
import weekReducer from '../reducers/week';
import ReduxThunk from 'redux-thunk'

const reducer = combineReducers({
  auth: authReducer,
  week: weekReducer,
  form: formReducer
})

export default createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
)