import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  form: formReducer
})

export default createStore(reducer, applyMiddleware(thunk))