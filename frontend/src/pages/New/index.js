import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'

import Header from '../../components/Header'

import { Container, Form } from './styles'

export default class New extends Component {
    state = {
        title: '',
        description: '',
        date: '',
        location: ''
    }

    handleSubmit = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        const { title, description, date, location } = this.state

        return (
            <>
                <Header />

                <Container>
                    
                    <Form>
                        <input 
                            type="text" 
                            placeholder="Título da meetup"
                            onChange={e => this.setState({ title: e.target.value })}
                            value={title}
                        />

                        <textarea 
                            placeholder="Descrição completa" 
                            rows="6"
                            onChange={e => this.setState({ description: e.target.value })}
                            value={description}
                        ></textarea>

                        <input
                            type="text" 
                            placeholder="Data da meetup" 
                            onChange={e => this.setState({ date: e.target.value })}
                            value={date}
                        />

                        <input 
                            type="text" 
                            placeholder="Localização da meetup" 
                            onChange={e => this.setState({ location: e.target.value })}
                            value={location}
                        />

                        <button onClick={this.handleSubmit}>
                            <Icon path={mdiPlusCircleOutline}
                                size={1}
                                color="#fff"
                            />
                            <span>Salvar meetup</span>
                        </button>
                    </Form>

                </Container>
            </>
        )
    }
}
