import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { Container, FormContainer } from './styles'

import api from '../../services/axios'

import logo from '../../assets/logo.png'

export default class SignIn extends Component {
  state = {
    email: 'adozindo@robot.rio.br',
    password: '123'
  }

  validation = Yup.object().shape({
    email: Yup.string()
      .email('Especifique um e-mail válido.')
      .required('É obrigatório um e-mail para login.'),
    password: Yup.string()
      .min(3, 'Sua senha deve conter pelo menos 3 caracteres')
      .max(30, 'Sua senha deve conter até 30 caracteres.')
      .required('É obrigatório especificar uma senha.')
  })

  componentDidMount() {
    const token = localStorage.getItem('meetapp_token')

    if(token) {
      this.props.history.push('/dashboard')
      return
    }
  }

  handleSubmit = async data => {
    const token = localStorage.getItem('meetapp_token')

    if(token) {
      this.props.history.push('/dashboard')
      return
    }

    try {
      const session = await api.post('/sessions', data)

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
        <FormContainer onSubmit={this.handleSubmit} schema={this.validation} className="validable">
            <img src={logo} alt="Meetapp" />

            <Input 
              type="text" 
              placeholder="Digite seu e-mail" 
              onChange={e => this.setState({ email: e.target.value })}
              value={email} 
              name="email"
            />

            <Input 
              type="password" 
              placeholder="Sua senha secreta" 
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
              name="password"
              maxLength="30"
            />

            <button>Entrar</button>

            <button className="transparent" href="#" onClick={this.handleSignUp}>Criar conta grátis</button>
        </FormContainer>
      </Container>
    )
  }
}
