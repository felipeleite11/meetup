import React, { Component } from 'react'

export default class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem('meetapp_token')
        localStorage.removeItem('meetapp_user')
        this.props.history.push('/')
    }

    render() {
        return <></>
    }
}
