import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, AsyncStorage, Alert, FlatList } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

import api from '../../services/axios'

import EmptyList from '../../components/EmptyList'

import { 
  Container,
  Card,
  CardInfo,
  InfoContainer,
  CardImage,
  CardIcon,
  CardText,
  CardTitle,
  Button,
  ButtonText,
  List } from './styles'

export default function Subscribes({ navigation }) {
  const [subscriptions, setSubscriptions] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {

    loadSubscriptions()

  }, [])

  async function loadSubscriptions() {
    const token = await AsyncStorage.getItem('meetapp_token')

    if(!token) return navigation.navigate('SignIn')

    try {
      const subscriptions = await api.get('/meetups/subscriptions', {
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      
      setSubscriptions(subscriptions)
    }
    catch(err) {
      Alert.alert(err.msg)
    }
  }

  async function handleCancelation(id) {
    const token = await AsyncStorage.getItem('meetapp_token')

    try {
      await api.delete(`/meetups/${id}/subscribe`, {
        headers: {
          Authorization: `Basic ${token}`
        }
      })
    }
    catch(err) {
      return Alert.alert(err.msg)
    }

    Alert.alert('Inscrição cancelada!')

    loadSubscriptions()
  }

  function refreshList() {
    loadSubscriptions()
  }

  return (
    <SafeAreaView>
      <Container>

        <NavigationEvents
          onDidFocus={() => loadSubscriptions()}
        />

        {subscriptions.length ? (
          <List
            data={subscriptions}
            keyExtractor={subscription => String(subscription.id)}
            renderItem={({ item }) => (
              <Card key={item.meetup.id}>
                <CardImage 
                  source={{ uri: item.meetup.banner.url }} 
                  style={{ resizeMode: 'cover' }}
                />

                <CardInfo>
                  <CardTitle>{item.meetup.title}</CardTitle>

                  <InfoContainer>
                    <CardIcon name="calendar" color="#7d7d7d" size={13} />
                    <CardText>{format(parseISO(item.meetup.datetime), `dd 'de' MMMM', às' HH':'mm'h'`, { locale: pt })}</CardText>
                  </InfoContainer>

                  <InfoContainer>
                    <CardIcon name="map-marker" color="#7d7d7d" size={16} />
                    <CardText>{item.meetup.location}</CardText>
                  </InfoContainer>

                  <InfoContainer>
                    <CardIcon name="user" color="#7d7d7d" size={14} />
                    <CardText>Organizador: {item.meetup.user.name}</CardText>
                  </InfoContainer>

                  <Button onPress={() => handleCancelation(item.meetup.id)}>
                    <ButtonText>Cancelar inscrição</ButtonText>
                  </Button>
                </CardInfo>
              </Card>
            )}
            refreshing={refreshing}
            onRefresh={refreshList}
            style={{width: '100%'}}
          />
        ) : (
          <EmptyList />
        )}

        {/* <ScrollView style={{ width: '100%' }}>

          {subscriptions.length ? subscriptions.map(subscription => (
            <Card key={subscription.meetup.id}>
              <CardImage 
                source={{ uri: subscription.meetup.banner.url }} 
                style={{ resizeMode: 'cover' }}
              />

              <CardInfo>
                <CardTitle>{subscription.meetup.title}</CardTitle>

                <InfoContainer>
                  <CardIcon name="calendar" color="#7d7d7d" size={13} />
                  <CardText>{format(parseISO(subscription.meetup.datetime), `dd 'de' MMMM`, { locale: pt })}</CardText>
                </InfoContainer>

                <InfoContainer>
                  <CardIcon name="map-marker" color="#7d7d7d" size={16} />
                  <CardText>{subscription.meetup.location}</CardText>
                </InfoContainer>

                <InfoContainer>
                  <CardIcon name="user" color="#7d7d7d" size={14} />
                  <CardText>Organizador: {subscription.meetup.user.name}</CardText>
                </InfoContainer>

                <Button onPress={() => handleCancelation(subscription.meetup.id)}>
                  <ButtonText>Cancelar inscrição</ButtonText>
                </Button>
              </CardInfo>
            </Card>
          )) : (
            <EmptyList />
          )}

        </ScrollView> */}

      </Container>
    </SafeAreaView>
  )
}
