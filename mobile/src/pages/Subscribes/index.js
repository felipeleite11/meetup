import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

import { Container, InnerText } from './styles'

import logo from '../../assets/logo.png'

export default class SignIn extends Component {
  // static navigationOptions = {
  //   title: 'M'
  // }

  render() {
    return (
        <SafeAreaView>
          <Container>

            <InnerText>SUBSCRIBES</InnerText>

          </Container>
        </SafeAreaView>
    )
  }
}
