import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default ({ isAuth, ...props }) => {
	return isAuth ? <Redirect to='/main' /> : <Route {...props} />
}
