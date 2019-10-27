import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

import { Container, Logo, Input, Button, InnerText, Link } from './styles'

import logo from '../../assets/logo.png'

export default class SignIn extends Component {
  static navigationOptions = {
    header: null
  }

  handleLoginForm = () => {
    const { navigation } = this.props
    navigation.navigate('SignIn')
  }

  handleCreateAccount = () => {
    console.tron.log('CRIAR CONTA AGORA!')

    const { navigation } = this.props
    navigation.navigate('SignIn')
  }

  render() {
    return (
        <SafeAreaView>
          <Container>

            <Logo source={logo} />

            <Input 
              placeholder="Nome completo"
            />
             
            <Input 
              placeholder="Digite Seu e-mail"
              keyboardType="email-address"
            />

            <Input 
              placeholder="Sua senha secreta"
              secureTextEntry={true}
            />

            <Button onPress={this.handleCreateAccount}>
              <InnerText>Criar conta</InnerText>
            </Button>

            <Link onPress={this.handleLoginForm}>
              <InnerText>Já tenho login</InnerText>
            </Link>

          </Container>
        </SafeAreaView>
    )
  }
}
