import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

import { Container, Logo, Input, Button, InnerText, Link } from './styles'

import logo from '../../assets/logo.png'

export default class SignIn extends Component {
  static navigationOptions = {
    header: null
  }

  handleLogin = () => {
    console.tron.log('FAZER O LOGIN AGORA!')
    
    const { navigation } = this.props
    navigation.navigate('Main')
  }

  handleCreateAccount = () => {
    const { navigation } = this.props
    navigation.navigate('SignUp')
  }

  render() {
    return (
        <SafeAreaView>
          <Container>

            <Logo source={logo} />

            <Input 
              placeholder="Digite seu e-mail"
            />
             
            <Input 
              placeholder="Sua senha secreta"
              secureTextEntry={true}
            />

            <Button onPress={this.handleLogin}>
              <InnerText>Entrar</InnerText>
            </Button>

            <Link onPress={this.handleCreateAccount}>
              <InnerText>Criar conta grátis</InnerText>
            </Link>

          </Container>
        </SafeAreaView>
    )
  }
}
