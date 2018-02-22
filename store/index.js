import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import pictures from './pictures';
import currPic from './currPic';

const reducer = combineReducers({ pictures, currPic })
const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export default store
export * from './pictures';
export * from './currPic';
