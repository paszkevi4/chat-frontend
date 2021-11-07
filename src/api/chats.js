import request from './index'

export const createChat = async (participants) => {
	const response = await request.post(`/chats`, {
		participants,
	})
	return response?.data
}

export const getMyChats = async (participants) => {
	const response = await request.get(`/chats/mychats`)
	return response?.data?.data
}
