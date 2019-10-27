import React, { useState, useEffect, createRef } from 'react'
import { SafeAreaView, Alert, ScrollView, AsyncStorage } from 'react-native'

import { Container, Input, Divider, Button, DarkButton, InnerText } from './styles'

import api from '../../services/axios'

export default function Profile({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')

  const newPasswordRef = createRef()

  useEffect(() => {

    loadProfile()

  }, [])

  async function loadProfile() {
    const token = await AsyncStorage.getItem('meetapp_token')

    try {
      const user = await api.get('/users', {
        headers: {
          Authorization: `Basic ${token}`
        }
      })

      setName(user.name)
      setEmail(user.email)
      setPassword('')
      setNewPassword('')
      setNewPasswordConfirm('')
    }
    catch(err) {
      Alert.alert(err.msg)
    }
  }

  async function handleLogoff() {
    await AsyncStorage.removeItem('meetapp_token')
    navigation.navigate('SignIn')
  }

  async function handleSave() {
    let userUpdate = {
      name,
      email
    }

    if(newPassword) {
      userUpdate = {
        ...userUpdate, 
        password: newPassword,
        oldPassword: password
      }
    }

    if(newPassword !== newPasswordConfirm) {
      setNewPassword('')
      setNewPasswordConfirm('')
      newPasswordRef.current.focus()
      return Alert.alert('As senhas não coincidem. Tente novamente.')
    }

    try {
      const token = await AsyncStorage.getItem('meetapp_token')

      await api.put('/users', userUpdate, {
        headers: {
          Authorization: `Basic ${token}`
        }
      })

      Alert.alert('Seu perfil foi atualizado!')
    }
    catch(err) {
      setPassword('')
      return Alert.alert(err.msg)
    }

    loadProfile()
  }

  return (
      <SafeAreaView>
        <Container>

          <ScrollView 
            style={{ width: '100%' }} 
            showsVerticalScrollIndicator={false}
          >

            <Input 
              placeholder="Seu nome"
              value={name}
              onChangeText={setName}
            />

            <Input 
              placeholder="Digite Seu e-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Divider />

            <Input 
              placeholder="Senha atual"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <Input 
              placeholder="Nova senha"
              secureTextEntry={true}
              value={newPassword}
              onChangeText={setNewPassword}
              ref={newPasswordRef}
            />

            <Input 
              placeholder="Confirmação de senha"
              secureTextEntry={true}
              value={newPasswordConfirm}
              onChangeText={setNewPasswordConfirm}
            />

            <Button onPress={handleSave}>
              <InnerText>Salvar perfil</InnerText>
            </Button>

            <DarkButton onPress={handleLogoff}>
              <InnerText>Sair do Meetapp</InnerText>
            </DarkButton>

          </ScrollView>

        </Container>
      </SafeAreaView>
  )
}
