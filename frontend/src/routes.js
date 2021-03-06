import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Detail from './pages/Detail'
import New from './pages/New'
import Profile from './pages/Profile'
import Logout from './pages/Logout'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={SignIn} exact />
            <Route path="/signup" component={SignUp} /> 
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/detail" component={Detail} />
            <Route path="/new" component={New} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
        </Switch>
    )   
}