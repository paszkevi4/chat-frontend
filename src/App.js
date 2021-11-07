import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import RenderIf from './components/Utils/RenderIf'
import { checkIsAuthThunk } from './store/authReducer'
import PrivateRoute from './components/Utils/PrivateRoute'
import AuthRoute from './components/Utils/AuthRoute'

import LoginPage from './components/Login/login'
import RegistrationPage from './components/Registration/Registration'
import MainPage from './components/Main/Main'
import './app.scss'

function App({ isAuth, isAppInitialized, ...props }) {
	useEffect(() => {
		props.checkIsAuthThunk()
	}, [])

	if (!isAppInitialized) {
		return <div>Loading...</div>
	}

	return (
		<div className='dark'>
			<BrowserRouter>
				{isAuth ? (
					<Switch>
						<Route path='/main' component={MainPage} />
						<Route path='/test' component={() => <div>Test</div>} />
						<Redirect to='/main' />
					</Switch>
				) : (
					<Switch>
						<Route path='/login' component={LoginPage} />
						<Route
							path='/registration'
							component={RegistrationPage}
						/>
						<Redirect to='/login' />
					</Switch>
				)}
			</BrowserRouter>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	isAppInitialized: state.auth.initialized,
})

export default connect(mapStateToProps, { checkIsAuthThunk })(App)
