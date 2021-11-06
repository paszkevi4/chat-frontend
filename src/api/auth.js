import request from './index'

export const login = async (email, password) => {
	const response = await request.post(`/auth/login`, {
		email,
		password,
	})
	return response?.data
}

export const logout = async () => {
	const response = await request.post(`/auth/logout`)
	return response?.data
}

export const registration = async (email, password) => {
	const response = await request.post(`/auth/registration`, {
		email,
		password,
	})
	return response?.data
}

export const checkIsAuth = async () => {
	const response = await request.get(`/auth/refresh`)
	return response?.data
}
