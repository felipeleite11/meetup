import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import { toast } from 'react-toastify'

import { Container, Form } from './styles'

import api from '../../services/axios'

import Header from '../../components/Header'

export default class Profile extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        newPassword: '',
        newPasswordConfirm: ''
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('meetapp_user'))

        this.setState({
            name: user.name,
            email: user.email
        })
    }

    handleSaveProfile = async () => {
        const { name, email, password, newPassword, newPasswordConfirm } = this.state

        let profile = null

        if(name && email) {
            profile = { name, email }
        }
        else {
            toast.warn('Preencha nome e e-mail corretamente.', { autoClose: 2300 })
            return
        }
        
        if(password && newPassword && newPassword === newPasswordConfirm) {
            profile = { ...profile, password, newPassword }
        }

        try {
            if(profile) {
                const token = localStorage.getItem('meetapp_token')

                const user = await api.put('/users', profile, {
                    headers: {
                        Authorization: `Basic ${token}`
                    }
                })

                localStorage.setItem('meetapp_user', JSON.stringify(user))

                this.props.history.push('/dashboard')
            }
        }
        catch(err) {
            toast.error(err.msg)
        }
    }

    render() {
        const { name, email, password, newPassword, newPasswordConfirm } = this.state

        const user = JSON.parse(localStorage.getItem('meetapp_user'))

        return (
            <>
                <Header user={user.name} />

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
