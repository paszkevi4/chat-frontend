import { login, logout, registration, checkIsAuth } from '../api/auth'

const initialState = {
	initialized: false,
	user: {},
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				...action.data,
			}
		case 'INITIAL_LOADING':
			return {
				...state,
				...action.data,
			}
		default:
			return state
	}
}

export const setUser = (user, isAuth) => ({
	type: 'SET_USER',
	data: { user, isAuth },
})

const initialize = (isAuth, user = {}) => ({
	type: 'INITIAL_LOADING',
	data: { initialized: true, isAuth, user },
})

export const logInThunk = (email, password) => {
	return (dispatch) => {
		login(email, password).then((response) => {
			if (response.success) {
				localStorage.setItem('accessToken', response.accessToken)
				dispatch(setUser(response.data, true))
			}
		})
	}
}

export const logOutThunk = () => {
	return (dispatch) => {
		logout().then((response) => {
			if (response.success) {
				localStorage.removeItem('accessToken')
				dispatch(setUser({}, false))
			}
		})
	}
}

export const registrationThunk = (email, password) => {
	return (dispatch) => {
		registration(email, password).then((response) => {
			if (response.success) {
				localStorage.setItem('accessToken', response.accessToken)
				dispatch(setUser(response.data, true))
			}
		})
	}
}

export const checkIsAuthThunk = () => {
	return (dispatch) => {
		checkIsAuth()
			.then((response) => {
				console.log('~ response', response)
				localStorage.setItem('accessToken', response.accessToken)
				dispatch(initialize(true, response.data))
			})
			.catch((response) => {
				dispatch(initialize(false))
			})
	}
}

export default authReducer
