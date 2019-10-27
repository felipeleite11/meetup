import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import api from '../../services/axios'

import { FormContainer, Container } from './styles'

import logo from '../../assets/logo.png'

import { nameRegex } from '../../utils/regex'

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    submitting: false
  }

  validation = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegex, 'Este nome não é válido.')
      .required('Informe seu nome.'),
    email: Yup.string()
      .email('Especifique um e-mail válido.')
      .required('É obrigatório um e-mail para login.'),
    password: Yup.string()
      .min(3, 'Sua senha deve conter pelo menos 3 caracteres')
      .max(30, 'Sua senha deve conter até 30 caracteres.')
      .required('É obrigatório especificar uma senha.')
  })

  handleSubmit = async data => {
    try {
      await api.post('/users', data)

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
        <FormContainer onSubmit={this.handleSubmit} schema={this.validation} className="validable">
            <img src={logo} alt="Meetapp" />

            <Input 
              type="text" 
              placeholder="Nome completo" 
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              name="name"
            />

            <Input 
              type="text" 
              placeholder="Digite seu e-mail" 
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              name="email"
            />

            <Input 
              type="password" 
              placeholder="Sua senha secreta" 
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              name="password"
            />

            <button disabled={submitting}>Criar conta</button>

            <button className="transparent" onClick={this.handleLoginRedirect}>Já tenho login</button>
        </FormContainer>
      </Container>
    )
  }
}
