import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiTrashCanOutline, mdiPencilOutline, mdiCalendar, mdiMapMarker  } from '@mdi/js'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import api from '../../services/axios'
import { toast } from 'react-toastify'

import { Container, TitleContainer, Content, ActionContainer } from './styles'

import Header from '../../components/Header'

export default class Detail extends Component {
    state = {
        meetup: {},

        //PROVISÓRIO
        banner: '',
        date: new Date()
        //PROVISÓRIO
    }

    async componentDidMount() {
        const token = localStorage.getItem('meetapp_token')
        const id = this.props.location.state.id
        
        const meetup = await api.get(`/meetups/${id}`, {
            headers: {
                Authorization: `Basic ${token}`
            }
        })

        //PROVISÓRIO
        const banner = meetup.banner.url
        const date = parseISO(meetup.datetime)
        //PROVISÓRIO

        this.setState({ meetup, banner, date })
    }

    handleEditClick = id => {
        this.props.history.push({
            pathname: '/new',
            state: { id }
        })
    }

    handleCancelClick = async id => {
        const { meetup } = this.state

        try {
            const token = localStorage.getItem('meetapp_token')

            await api.delete('/meetups', {
                headers: { 
                    id,
                    Authorization: `Basic ${token}`
                }
            })

            toast.success(`A meetup ${meetup.title} foi cancelada!`)

            this.props.history.push('/dashboard')
        }
        catch(err) {
            toast.error(err.msg)
        }
    }

    render() {
        const { meetup, banner, date } = this.state

        const user = JSON.parse(localStorage.getItem('meetapp_user'))

        return (
            <>
                <Header user={user.name} />

                <Container>
                    <TitleContainer>
                        <h1>{meetup.title}</h1>

                        <ActionContainer>
                            <button onClick={() => this.handleEditClick(meetup.id)}>
                                <Icon path={mdiPencilOutline}
                                    size={0.8}
                                    color="#fff"
                                />

                                <span>Editar</span>
                            </button>

                            <button onClick={() => this.handleCancelClick(meetup.id)}>
                                <Icon path={mdiTrashCanOutline}
                                    size={0.8}
                                    color="#fff"
                                />

                                <span>Cancelar</span>
                            </button>
                        </ActionContainer>
                    </TitleContainer>

                    <Content>
                        <img src={banner} alt={meetup.title} />

                        <p>{meetup.description}</p>

                        <p>Caso queira participar como palestrante do meetup envie um e-mail para organizacao@meetapp.com.br.</p>

                        <span>
                            <Icon path={mdiCalendar}
                                size={0.8}
                                color="#fff"
                            />
                            {format(date, `dd 'de' LLLL', às' H'h'`, { locale: pt })}
                        </span>

                        <span>
                            <Icon path={mdiMapMarker}
                                size={0.8}
                                color="#fff"
                            />
                            {meetup.location}
                        </span>
                    </Content>
                </Container>
            </>
        )
    }
}
