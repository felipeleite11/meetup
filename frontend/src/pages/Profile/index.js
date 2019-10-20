import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'

import Header from '../../components/Header'

import { Container, Form } from './styles'

export default class Profile extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        newPassword: '',
        newPasswordConfirm: ''
    }

    handleSaveProfile = () => {
        alert(`handleSaveProfile`)
    }

    render() {
        const { name, email, password, newPassword, newPasswordConfirm } = this.state

        return (
            <>
                <Header />

                <Container>
                    
                    <Form>
                        <input 
                            type="text" 
                            placeholder="Seu nome"
                            onChange={e => this.setState({ name: e.target.value })}
                            value={name}
                        />

                        <input 
                            type="text" 
                            placeholder="Seu e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={email}
                        />

                        <hr />

                        <input 
                            type="password" 
                            placeholder="Sua senha atual" 
                            onChange={e => this.setState({ password: e.target.value })}
                            value={password} 
                        />

                        <input 
                            type="password" 
                            placeholder="Sua nova senha" 
                            onChange={e => this.setState({ newPassword: e.target.value })}
                            value={newPassword}
                        />

                        <input 
                            type="password" 
                            placeholder="Confirme sua nova senha" 
                            onChange={e => this.setState({ newPasswordConfirm: e.target.value })}
                            value={newPasswordConfirm}
                        />

                        <button onClick={this.handleSaveProfile}>
                            <Icon path={mdiPlusCircleOutline}
                                size={1}
                                color="#fff"
                            />
                            <span>Salvar perfil</span>
                        </button>
                    </Form>

                </Container>
            </>
        )
    }
}
