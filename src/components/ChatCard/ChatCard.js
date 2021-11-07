import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createMessage } from '../../api/messages'
import { getUser } from '../../api/users'
import './chatCard.scss'

const ChatShortcut = ({ chat, id }) => {
	console.log('~ chat', chat)
	const [user, setUser] = useState({})

	useEffect(() => {
		const userId = chat?.participants?.find((p) => p !== id)
		findUser(userId)
	}, [chat])

	const findUser = async (id) => {
		const foundUser = await getUser(id)
		console.log('~ foundUser', foundUser)
		setUser(foundUser)
	}

	const sendMessage = async () => {
		const mes = await createMessage(chat.hash, 'Hello world 2!')
		console.log('~ mes', mes)
	}

	return (
		<div className='chat-card'>
			<div className='chat-card__name'>{user.name}</div>
			<div className='chat-card__last-message'>{chat.lastMessage}</div>
			<button onClick={sendMessage}>SEND</button>
		</div>
	)
}

const mapStateToProps = (state) => ({
	id: state.auth.user._id,
})

export default connect(mapStateToProps)(ChatShortcut)
