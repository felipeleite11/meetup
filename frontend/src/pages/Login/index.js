import React, { Component } from 'react'

import { Container } from './styles'

import logo from '../../assets/logo.png'

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = () => {
    const { email, password } = this.state

    this.props.history.push('/dashboard')
  }
 
  handleSignUp = () => {
    alert('handleSignUp')
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
