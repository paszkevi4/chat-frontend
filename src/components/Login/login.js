import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logInThunk } from '../../store/authReducer'

const LoginPage = ({ logInThunk }) => {
	const [email, setEmail] = useState('user1@gmail.com')
	const [password, setPassword] = useState('1234')

	const onLoginSubmit = () => {
		logInThunk(email, password)
	}

	return (
		<div>
			<input
				type='text'
				value={email}
				onChange={(e) => setEmail(e.currentTarget.value)}
			/>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
			/>
			<button onClick={onLoginSubmit}>Login</button>
			<p>Dont have an account yet?</p>{' '}
			<Link to='/registration'>Registration</Link>
		</div>
	)
}

export default connect(null, { logInThunk })(LoginPage)
