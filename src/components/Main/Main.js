import { connect } from 'react-redux'
import { logOutThunk } from '../../store/authReducer'

const MainPage = (props) => {
	const logout = () => {
		props.logOutThunk()
	}
	return <div onClick={logout}>Logout</div>
}

export default connect(null, { logOutThunk })(MainPage)
