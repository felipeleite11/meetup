import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Detail from './pages/Detail'
import New from './pages/New'
import Profile from './pages/Profile'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/signup" component={SignUp} /> 
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/detail" component={Detail} />
            <Route path="/new" component={New} />
            <Route path="/profile" component={Profile} />
        </Switch>
    )   
}