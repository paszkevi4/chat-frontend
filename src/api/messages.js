import request from './index'

export const createMessage = async (hash, message) => {
	const response = await request.post(`/messages`, {
		hash,
		message,
	})
	return response?.data
}

// export const getMyChats = async (participants) => {
// 	const response = await request.get(`/chats/mychats`)
// 	return response?.data?.data
// }
