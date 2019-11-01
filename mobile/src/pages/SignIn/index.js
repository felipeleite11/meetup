import React, { useState, useEffect } from 'react'
import { SafeAreaView, AsyncStorage, Alert, Text } from 'react-native'
import { NavigationActions, StackActions  } from 'react-navigation'

import api from '../../services/axios'

import { Container, Logo, Input, Button, InnerText, Link } from './styles'

import logo from '../../assets/logo.png'

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('felipe@rocketseat.com')
  const [password, setPassword] = useState('123')

  useEffect(() => {
    async function checkAutenticated() {
      const token = await AsyncStorage.getItem('meetapp_token')
      
      if(token) return navigation.navigate('Main')
    }
    
    checkAutenticated()

  }, [])

  async function handleLogin() {
    try {
      const session = await api.post('/sessions', { email, password })

      await AsyncStorage.setItem('meetapp_token', session.token)

      //Redefine a stack, removendo a tela de login
      const stackReset = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main'})
        ]
      })
      
      navigation.dispatch(stackReset)
    } 
    catch (err) {
      console.tron.log(err)
      Alert.alert(err.msg)
      setPassword('')
    }
  }

  function handleCreateAccount() {
    navigation.navigate('SignUp')
  }

  return (
      <SafeAreaView>
        <Container>

          <Logo source={logo} />

          <Input 
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />
            
          <Input 
            placeholder="Sua senha secreta"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button onPress={handleLogin}>
            <InnerText>Entrar</InnerText>
          </Button>

          <Link onPress={handleCreateAccount}>
            <InnerText>Criar conta grátis</InnerText>
          </Link>

        </Container>
      </SafeAreaView>
  )
}

SignIn.navigationOptions = {
  header: null
}


