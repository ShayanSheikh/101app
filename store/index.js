import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import pictures from './pictures';
import utils from './utils';

const reducer = combineReducers({ pictures, utils })
const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export default store
export * from './pictures';
export * from './utils';
