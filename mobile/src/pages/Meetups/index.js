import React, { useState, useEffect } from 'react'
import { SafeAreaView, AsyncStorage, Alert } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { format, parseISO, addDays, subDays } from 'date-fns'
import { pt } from 'date-fns/locale'
import Snackbar from 'react-native-snackbar'

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
  const [date, setDate] = useState(new Date(2019, 11, 1))
  const [page, setPage] = useState(1)
  const [refreshing, setRefreshing] = useState(true)

  useEffect(() => {

    loadMeetups()

  }, [date])

  async function loadMeetups() {
    try {
      setRefreshing(true)

      const token = await AsyncStorage.getItem('meetapp_token')

      if(!token) return navigation.navigate('SignIn')

      const meetups = await api.get('/meetups', {
        params: { page: 1, date },
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      
      setPage(1)
      setMeetups(meetups)
    }
    catch(err) {
      Alert.alert(err.msg || 'Ocorreu um erro ao carregar as meetups desta data.')
    }
    finally {
      setRefreshing(false)
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

    Snackbar.show({
      title: 'Inscrição realizada!',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#4caf50',
      color: '#FFF'
    })
    
    loadMeetups()
  }

  function refreshList() {
    setPage(1)
    loadMeetups()
  }

  async function loadMore() {
    if(meetups.length < 3) return

    try {
      setRefreshing(true)

      const token = await AsyncStorage.getItem('meetapp_token')

      const response = await api.get('/meetups', {
        params: { 
          page: page + 1, 
          date 
        },
        headers: {
          Authorization: `Basic ${token}`
        }
      })

      setPage(page + 1)
      
      if(response.length) {
        setMeetups([...meetups, ...response])
      }
    }
    catch(err) {
      Alert.alert(err.msg || 'Ocorreu um erro ao tentar carregar mais itens na lista.')
    }
    finally {
      setRefreshing(false)
    }
  }
  
  return (
    <SafeAreaView>
      <Container>

        <NavigationEvents
          onDidFocus={loadMeetups}
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
                    <CardText>{format(parseISO(item.datetime), `dd 'de' MMMM', às' HH':'mm'h'`, { locale: pt })}</CardText>
                  </InfoContainer>

                  <InfoContainer>
                    <CardIcon name="map-marker" color="#7d7d7d" size={16} />
                    <CardText>{item.location}</CardText>
                  </InfoContainer>

                  <InfoContainer>
                    <CardIcon name="user" color="#7d7d7d" size={14} />
                    <CardText>Organizador: {item.user.name}</CardText>
                  </InfoContainer>

                  <Button onPress={() => handleSubscribe(item.id)} disabled={item.past}>
                    <ButtonText>
                      {item.past ? 'Inscrição encerrada' : 'Realizar inscrição'}
                    </ButtonText>
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

      </Container>
    </SafeAreaView>
  )
}
