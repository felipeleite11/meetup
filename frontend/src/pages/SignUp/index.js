import React from 'react'

import { Container } from './styles'

import logo from '../../assets/logo.png'

export default function SignUp() {
  
  function handleLogin() {
    alert('handleLogin')
  }

  function handleSignUp() {
    alert('handleSignUp')
  }

  return (
    <Container>
        <img src={logo} />

        <input type="text" placeholder="Nome completo" value="Felipe Leite" />

        <input type="text" placeholder="Digite seu e-mail" value="felipe@robot.rio.br" />

        <input type="password" placeholder="Sua senha secreta" value="123456" />

        <button onClick={handleLogin}>Entrar</button>

        <a href="#" onClick={handleSignUp}>Criar conta grátis</a>
    </Container>
  )
}
