import axios from 'axios'

export const API_URL = 'http://localhost:5001/'

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem(
		'accessToken',
	)}`
	return config
})

export default api
