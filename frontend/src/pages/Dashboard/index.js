import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline, mdiChevronRight } from '@mdi/js'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import api from '../../services/axios'

import { Container, TitleContainer } from './styles'

import Header from '../../components/Header'

export default class Dashboard extends Component {
    state = {
        meetups: [],
        page: 1
    }

    async componentDidMount() {
        const { page } = this.state
        const token = localStorage.getItem('meetapp_token')
        const date = format(new Date(), 'yyyy-MM-dd')

        const meetups = await api.get(`/meetups?page=${page}&date=${date}`, {
            headers: {
                Authorization: `Basic ${token}`
            }
        })

        this.setState({ meetups })
    }

    handleMeetupClick = (id) => {
        this.props.history.push({
            pathname: '/detail',
            state: { id }
        })
    }

    handleNewMeetup = () => {
        this.props.history.push('/new')
    }

    render() {
        const { meetups } = this.state

        const user = JSON.parse(localStorage.getItem('meetapp_user'))

        return (
            <>
                <Header user={user.name} />

                <Container>
                    <TitleContainer>
                        <h1>Meus meetups</h1>

                        <button onClick={this.handleNewMeetup}>
                            <Icon path={mdiPlusCircleOutline}
                                size={0.8}
                                color="#fff"
                            />

                            <span>Novo meetup</span>
                        </button>
                    </TitleContainer>

                    <ul>
                        {meetups.map(meetup => (
                            <li key={meetup.id} onClick={() => this.handleMeetupClick(meetup.id)}>
                                <strong>
                                    {meetup.title}
                                </strong>
                                <span>
                                    {format(parseISO(meetup.datetime), `dd 'de' LLLL', às' H'h'`, { locale: pt })}
                                </span>
                                <div>
                                    <Icon path={mdiChevronRight}
                                        size={0.8}
                                        color="#fff"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </Container>
            </>
        )
    }
}
