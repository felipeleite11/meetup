import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'

import Header from '../../components/Header'

import { Container, TitleContainer } from './styles'

export default class Dashboard extends Component {
    state = {
        meetups: []
    }

    componentDidMount() {
        this.setState({
            meetups: [
                {
                    id: 1,
                    name: 'Minha Meetup TOP',
                    date: '4 de dezembro de 2019'
                },
                {
                    id: 2,
                    name: 'Minha Meetup RUIM',
                    date: '1 de dezembro de 2019'
                }
            ]
        })
    }

    handleMeetupClick = (id) => {
        this.props.history.push('/detail')
    }

    handleNewMeetup = () => {
        this.props.history.push('/new')
    }

    render() {
        const { meetups } = this.state

        return (
            <>
                <Header />

                <Container>
                    <TitleContainer>
                        <h1>Meus meetups</h1>

                        <button onClick={this.handleNewMeetup}>
                            <Icon path={mdiPlusCircleOutline}
                                size={0.8}
                                horizontal
                                vertical
                                color="#fff"
                            />

                            <span>Novo meetup</span>
                        </button>
                    </TitleContainer>

                    <ul>
                        {meetups.map(meetup => (
                            <li key={meetup.id} onClick={() => this.handleMeetupClick(meetup.id)}>
                                <strong>
                                    {meetup.name}
                                </strong>
                                <span>
                                    {meetup.date}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Container>
            </>
        )
    }
}
