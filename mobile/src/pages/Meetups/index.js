import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, AsyncStorage, Alert, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { format, parseISO, addDays, subDays } from 'date-fns'
import { pt } from 'date-fns/locale'

import api from '../../services/axios'

import EmptyList from '../../components/EmptyList'

import { 
  Container,
  Paginator,
  PaginatorText,
  PaginatorArrow,
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

export default function Meetups({ navigation }) {
  const [meetups, setMeetups] = useState([])
  const [date, setDate] = useState(new Date())
  const [page, setPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {

    loadMeetups()

  }, [date, page])

  async function loadMeetups() {
    const token = await AsyncStorage.getItem('meetapp_token')

    if(!token) return navigation.navigate('SignIn')

    try {
      const meetups = await api.get('/meetups', {
        params: { page, date },
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      
      setMeetups(meetups)
    }
    catch(err) {
      Alert.alert(err.msg)
    }
  }

  function handleNextDate() {
    const newDate = addDays(date, 1)
    setDate(newDate)
  }

  function handlePrevDate() {
    const newDate = subDays(date, 1)
    setDate(newDate)
  }

  async function handleSubscribe(id) {
    const token = await AsyncStorage.getItem('meetapp_token')

    try {
      await api.post(`/meetups/${id}/subscribe`, {}, {
        headers: {
          Authorization: `Basic ${token}`
        }
      })
    }
    catch(err) {
      return Alert.alert(err.msg)
    }

    navigation.navigate('Subscribes')
    
    Alert.alert('Inscrição realizada!')

    loadMeetups()
  }

  function refreshList() {
    setPage(1)
    loadMeetups()
  }

  async function loadMore() {
    const token = await AsyncStorage.getItem('meetapp_token')

    try {
      const response = await api.get('/meetups', {
        params: { page, date },
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      
      setMeetups([...meetups, ...response.data])
    }
    catch(err) {
      Alert.alert(err.msg)
    }
  }
  
  return (
    <SafeAreaView>
      <Container>

        <NavigationEvents
          onDidFocus={() => loadMeetups()}
        />

        <Paginator>
          <PaginatorArrow name="chevron-left" onPress={handlePrevDate} />
          <PaginatorText>{format(date, `dd 'de' MMMM`, { locale: pt })}</PaginatorText>
          <PaginatorArrow name="chevron-right" onPress={handleNextDate} />
        </Paginator>

        {meetups.length ? (
          <List
            data={meetups}
            keyExtractor={meetup => String(meetup.id)}
            renderItem={({ item }) => (
              <Card key={item.id}>
                <CardImage 
                  source={{ uri: item.banner.url }} 
                  style={{ resizeMode: 'cover' }}
                />

                <CardInfo>
                  <CardTitle>{item.title}</CardTitle>

                  <InfoContainer>
                    <CardIcon name="calendar" color="#7d7d7d" size={13} />
                    <CardText>{format(parseISO(item.datetime), `dd 'de' MMMM`, { locale: pt })}</CardText>
                  </InfoContainer>

                  <InfoContainer>
                    <CardIcon name="map-marker" color="#7d7d7d" size={16} />
                    <CardText>{item.location}</CardText>
                  </InfoContainer>

                  <InfoContainer>
                    <CardIcon name="user" color="#7d7d7d" size={14} />
                    <CardText>Organizador: {item.user.name}</CardText>
                  </InfoContainer>

                  <Button onPress={() => handleSubscribe(item.id)}>
                    <ButtonText>Realizar inscrição</ButtonText>
                  </Button>
                </CardInfo>
              </Card>
            )}
            refreshing={refreshing}
            onRefresh={refreshList}
            onEndReachedThreshold={0.2}
            onEndReached={loadMore}
          />
        ) : (
          <EmptyList />
        )}

        {/* <ScrollView style={{ width: '100%' }}>

          {meetups.length ? meetups.map(meetup => (
            <Card key={meetup.id}>
              <CardImage 
                source={{ uri: meetup.banner.url }} 
                style={{ resizeMode: 'cover' }}
              />

              <CardInfo>
                <CardTitle>{meetup.title}</CardTitle>

                <InfoContainer>
                  <CardIcon name="calendar" color="#7d7d7d" size={13} />
                  <CardText>{format(parseISO(meetup.datetime), `dd 'de' MMMM`, { locale: pt })}</CardText>
                </InfoContainer>

                <InfoContainer>
                  <CardIcon name="map-marker" color="#7d7d7d" size={16} />
                  <CardText>{meetup.location}</CardText>
                </InfoContainer>

                <InfoContainer>
                  <CardIcon name="user" color="#7d7d7d" size={14} />
                  <CardText>Organizador: {meetup.user.name}</CardText>
                </InfoContainer>

                <Button onPress={() => handleSubscribe(meetup.id)}>
                  <ButtonText>Realizar inscrição</ButtonText>
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
