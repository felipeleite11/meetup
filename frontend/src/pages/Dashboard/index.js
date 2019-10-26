import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline, mdiChevronRight, mdiChevronLeft } from '@mdi/js'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import api from '../../services/axios'

import { Container, TitleContainer, PaginationContainer } from './styles'

import Header from '../../components/Header'

export default class Dashboard extends Component {
    state = {
        meetups: [],
        page: 1
    }

    token = localStorage.getItem('meetapp_token')
    date = format(new Date(), 'yyyy-MM-dd')

    async componentDidMount() {
        const { page } = this.state

        const meetups = await api.get(`/meetups?page=${page}&date=${this.date}`, {
            headers: {
                Authorization: `Basic ${this.token}`
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

    handlePrevPage = async () => {
        const { page } = this.state

        if(page > 1) {
            const meetups = await api.get(`/meetups?page=${page - 1}&date=${this.date}`, {
                headers: {
                    Authorization: `Basic ${this.token}`
                }
            })

            this.setState({ 
                meetups, 
                page: page - 1 
            })
        }
    }

    handleNextPage = async () => {
        const { page } = this.state

        const meetups = await api.get(`/meetups?page=${page + 1}&date=${this.date}`, {
            headers: {
                Authorization: `Basic ${this.token}`
            }
        })

        if(meetups.length) {
            this.setState({ 
                meetups,
                page: page + 1
            })
        }
    }

    render() {
        const { meetups, page } = this.state

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

                    <PaginationContainer>
                        <button onClick={this.handlePrevPage}>
                            <Icon path={mdiChevronLeft}
                                size={0.8}
                                color="#fff"
                            />
                        </button>

                        <span>{page}</span>

                        <button onClick={this.handleNextPage}>
                            <Icon path={mdiChevronRight}
                                size={0.8}
                                color="#fff"
                            />
                        </button>
                    </PaginationContainer>

                    <ul>
                        {meetups.map((meetup, index) => (
                            <li key={meetup.id} onClick={() => this.handleMeetupClick(meetup.id)} position={index}>
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
