import React, { useState } from 'react'
import { SafeAreaView, Alert } from 'react-native'

import { Container, Logo, Input, Button, InnerText, Link } from './styles'

import api from '../../services/axios'

import logo from '../../assets/logo.png'

export default function SignUp({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLoginForm() {
    navigation.navigate('SignIn')
  }

  async function handleCreateAccount() {
    try {
      await api.post('/users', {
        name,
        email,
        password
      })
    }
    catch(err) {
      return Alert.alert(err.msg)
    }

    Alert.alert('Sua conta foi criada!')

    navigation.navigate('SignIn')
  }

  return (
      <SafeAreaView>
        <Container>

          <Logo source={logo} />

          <Input 
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />
            
          <Input 
            placeholder="Digite Seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Input 
            placeholder="Sua senha secreta"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button onPress={handleCreateAccount}>
            <InnerText>Criar conta</InnerText>
          </Button>

          <Link onPress={handleLoginForm}>
            <InnerText>Já tenho login</InnerText>
          </Link>

        </Container>
      </SafeAreaView>
  )
}

SignUp.navigationOptions = {
  header: null
}