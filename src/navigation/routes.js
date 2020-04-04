import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'

import SignInScreen from '../screens/SignInScreen'
import AdminDashboard from '../screens/AdminDashboard'

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={SignInScreen} />
            <PrivateRoute path="/dashboard" exact component={AdminDashboard} />
            {/* redirect user to SignIn page if PrivateRoute does not exist and user is not authenticated */}
            <PrivateRoute component={SignInScreen} />
        </Switch>
    )
}
