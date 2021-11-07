import { connect } from 'react-redux'
import { logOutThunk } from '../../store/authReducer'
import { getUsers } from '../../api/users'
import { useEffect, useState } from 'react'
import { createChat, getMyChats } from '../../api/chats'
import './main.scss'
import ChatShortcut from '../ChatCard/ChatCard'

const MainPage = (props) => {
	const [chats, setChats] = useState([])
	const logout = () => {
		props.logOutThunk()
	}
	const loadUsers = async () => {
		const r = await getUsers()
		console.log('~ r', r)
		// const newChat = await createChat([
		// 	'6178321f60d31bb783d1c37b',
		// 	'618581154f379ae5657ad79a',
		// ])
		// console.log('~ newChat', newChat)
		const myChats = await getMyChats()
		setChats(myChats)
		console.log('~ myChats', myChats)
	}
	useEffect(() => {
		loadUsers()
	}, [])
	return (
		<div className='main'>
			<div className='menu'>
				{chats.map((chat) => (
					<ChatShortcut chat={chat} />
				))}
			</div>
			<div className='messages'>
				<div className='messages__header'></div>
				<div className='messages__body'></div>
				<div className='messages__footer'></div>
			</div>
			{/* <div onClick={logout}>Logout</div> */}
		</div>
	)
}

export default connect(null, { logOutThunk })(MainPage)
