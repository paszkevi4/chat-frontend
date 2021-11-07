import request from './index'

export const getUsers = async () => {
	const response = await request.get(`/users`)
	return response?.data
}

export const getUser = async (id) => {
	const response = await request.get(`/users/user/${id}`)
	return response?.data?.data
}
