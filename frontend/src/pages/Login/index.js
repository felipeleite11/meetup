import React, { Component } from 'react'
import { toast } from 'react-toastify'

import { Container } from './styles'

import api from '../../services/axios'

import logo from '../../assets/logo.png'

export default class Login extends Component {
  state = {
    email: 'adozindo@robot.rio.br',
    password: '123'
  }

  componentDidMount() {
    const token = localStorage.getItem('meetapp_token')

    if(token) {
      this.props.history.push('/dashboard')
      return
    }
  }

  handleLogin = async () => {
    const { email, password } = this.state

    const token = localStorage.getItem('meetapp_token')

    if(token) {
      this.props.history.push('/dashboard')
      return
    }

    try {
      const session = await api.post('/sessions', {
        email,
        password
      })

      localStorage.setItem('meetapp_token', session.token)
      localStorage.setItem('meetapp_user', JSON.stringify(session.user))

      this.props.history.push('/dashboard')
    }
    catch(err) {
      toast.error(err.msg)
    }
  }
 
  handleSignUp = () => {
    this.props.history.push('/signup')
  }

  render() {
    const { email, password } = this.state

    return (
      <Container>
          <img src={logo} />

          <input 
            type="text" 
            placeholder="Digite seu e-mail" 
            onChange={e => this.setState({ email: e.target.value })}
            value={email} 
          />

          <input 
            type="password" 
            placeholder="Sua senha secreta" 
            onChange={e => this.setState({ password: e.target.value })}
            value={password}
          />

          <button onClick={this.handleLogin}>Entrar</button>

          <a href="#" onClick={this.handleSignUp}>Criar conta grátis</a>
      </Container>
    )
  }
}
