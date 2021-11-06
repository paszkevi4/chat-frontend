import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import RenderIf from './components/Utils/RenderIf'
import { checkIsAuthThunk } from './store/authReducer'
import PrivateRoute from './components/Utils/PrivateRoute'
import AuthRoute from './components/Utils/AuthRoute'

import LoginPage from './components/Login/login'
import RegistrationPage from './components/Registration/registration'
import MainPage from './components/Main/Main'

function App({ isAuth, isAppInitialized, ...props }) {
	useEffect(() => {
		props.checkIsAuthThunk()
	}, [])

	if (!isAppInitialized) {
		return <div>Loading...</div>
	}

	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute
					isAuth={isAuth}
					path='/test'
					component={() => <div>Test</div>}
				/>
				<PrivateRoute
					isAuth={isAuth}
					path='/main'
					component={MainPage}
				/>
				<AuthRoute
					isAuth={isAuth}
					path='/login'
					component={LoginPage}
				/>
				<AuthRoute
					isAuth={isAuth}
					path='/registration'
					component={RegistrationPage}
				/>
				<Route path='*' component={() => <div>Page not found</div>} />
			</Switch>
		</BrowserRouter>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	isAppInitialized: state.auth.initialized,
})

export default connect(mapStateToProps, { checkIsAuthThunk })(App)
