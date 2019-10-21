import React, { Component } from 'react'
import { toast } from 'react-toastify'

import api from '../../services/axios'

import { Container } from './styles'

import logo from '../../assets/logo.png'

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    submitting: false
  }
  
  handleCreateAccount = async () => {
    const { name, email, password } = this.state

    try {
      await api.post('/users', {
        name,
        email,
        password
      })

      this.setState({
        name: '',
        email: '',
        password: '',
        submitting: true
      })

      toast.success('Cadastro realizado com sucesso!')

      this.props.history.push('/')
    }
    catch(err) {
      toast.error(err.msg)
    }
  }

  handleLoginRedirect = () => {
    this.props.history.push('/')
  }

  render() {
    const { name, email, password, submitting } = this.state

    return (
      <Container>
          <img src={logo} />

          <input 
            type="text" 
            placeholder="Nome completo" 
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />

          <input 
            type="text" 
            placeholder="Digite seu e-mail" 
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />

          <input 
            type="password" 
            placeholder="Sua senha secreta" 
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <button onClick={this.handleCreateAccount} disabled={submitting}>Criar conta</button>

          <a href="#" onClick={this.handleLoginRedirect}>Já tenho login</a>
      </Container>
    )
  }
}
