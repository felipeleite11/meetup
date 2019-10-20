import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiTrashCanOutline, mdiPencilOutline } from '@mdi/js'

import Header from '../../components/Header'

import { Container, TitleContainer, Content, ActionContainer } from './styles'

export default class Detail extends Component {
    state = {
        meetup: {}
    }

    componentDidMount() {
        this.setState({
            meetup: {
                        id: 1,
                        name: 'Minha Meetup TOP',
                        date: '4 de dezembro de 2019, às 13h',
                        description: 'Aliquam congue fringilla risus et placerat. Phasellus lacinia augue ut varius aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a gravida lectus, at lacinia eros. Pellentesque sodales rutrum lorem elementum eleifend. Donec sollicitudin placerat eleifend. Suspendisse maximus ornare velit sed fermentum. Vivamus laoreet egestas eleifend.',
                        location: 'Rua Teresa, 123, sala 2',
                        image: 'https://independente.sfo2.digitaloceanspaces.com/2019/09/jeltech.jpg'
                    }
        })
    }

    handleEditClick = (id) => {
        this.props.history.push('/new')
    }

    handleCancelClick = (id) => {
        alert(`handleCancelClick(${id})`)
    }

    render() {
        const { meetup } = this.state

        return (
            <>
                <Header />

                <Container>
                    <TitleContainer>
                        <h1>{meetup.name}</h1>

                        <ActionContainer>
                            <button onClick={this.handleEditClick}>
                                <Icon path={mdiPencilOutline}
                                    size={0.8}
                                    color="#fff"
                                />

                                <span>Editar</span>
                            </button>

                            <button onClick={this.handleNewMeetup}>
                                <Icon path={mdiTrashCanOutline}
                                    size={0.8}
                                    color="#fff"
                                />

                                <span>Cancelar</span>
                            </button>
                        </ActionContainer>
                    </TitleContainer>

                    <Content>
                        <img src={meetup.image} />

                        <p>{meetup.description}</p>

                        <p>Caso queira participar como palestrante do meetup envie um e-mail para organizacao@meetuprn.com.br.</p>

                        <span>{meetup.date}</span>

                        <span>{meetup.location}</span>
                    </Content>
                </Container>
            </>
        )
    }
}
