import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registrationThunk } from '../../store/authReducer'

const RegistrationPage = ({ registrationThunk }) => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const onLoginSubmit = () => {
		registrationThunk(email, name, password)
	}

	return (
		<div>
			<input
				type='text'
				value={email}
				onChange={(e) => setEmail(e.currentTarget.value)}
			/>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.currentTarget.value)}
			/>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
			/>
			<button onClick={onLoginSubmit}>Registration</button>
			<p>Already have an account?</p> <Link to='/login'>Login</Link>
		</div>
	)
}

export default connect(null, { registrationThunk })(RegistrationPage)
