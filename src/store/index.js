import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import authReducer from './authReducer'
// import usersReduser from './usersReducer'

const reducers = combineReducers({
	auth: authReducer,
	// usersPage: usersReduser,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store
