import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import { toast } from 'react-toastify'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { Container, FormContainer } from './styles'

import api from '../../services/axios'

import Header from '../../components/Header'

import { nameRegex } from '../../utils/regex'

export default class Profile extends Component {
    state = {
        name: '',
        email: '',
        oldPassword: '',
        password: '',
        passwordConfirm: ''
    }

    validation = Yup.object().shape({
        name: Yup.string()
            .matches(nameRegex, 'Este nome não é válido.')
            .required('Informe seu nome.'),
        email: Yup.string()
            .email('Especifique um e-mail válido.')
            .required('Informe seu e-mail.'),
        oldPassword: Yup.string()
            .matches(/()|(.+)/, 'Senha inválida!'),
        password: Yup.string()
            .when('oldPassword', (oldPassword, field) => 
                oldPassword ? field
                    .required('Entre com a nova senha.')
                    .min(3, 'Sua nova senha deve conter pelo menos 3 caracteres.') : field
            ),
        passwordConfirm: Yup.string().when('password', (password, field) => 
            password ? field.oneOf([Yup.ref('password')], 'As senhas não coincidem.') : field
        )
    })

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('meetapp_user'))

        this.setState({
            name: user.name,
            email: user.email
        })
    }

    handleSubmit = async data => {
        try {
            const token = localStorage.getItem('meetapp_token')

            const user = await api.put('/users', data, {
                headers: {
                    Authorization: `Basic ${token}`
                }
            })

            localStorage.setItem('meetapp_user', JSON.stringify(user))

            this.props.history.push('/dashboard')
        }
        catch(err) {
            toast.error(err.msg)
        }
    }

    render() {
        const { name, email, oldPassword, password, passwordConfirm } = this.state

        const user = JSON.parse(localStorage.getItem('meetapp_user'))

        return (
            <>
                <Header user={user.name} />

                <Container>
                    
                    <FormContainer onSubmit={this.handleSubmit} schema={this.validation} className="validable">
                        <Input 
                            type="text" 
                            placeholder="Seu nome"
                            onChange={e => this.setState({ name: e.target.value })}
                            value={name}
                            name="name"
                        />

                        <Input 
                            type="text" 
                            placeholder="Seu e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={email}
                            name="email"
                        />

                        <hr />

                        <Input 
                            type="password" 
                            placeholder="Sua senha atual" 
                            onChange={e => this.setState({ oldPassword: e.target.value })}
                            value={oldPassword}
                            name="oldPassword" 
                        />

                        <Input 
                            type="password" 
                            placeholder="Sua nova senha" 
                            onChange={e => this.setState({ password: e.target.value })}
                            value={password}
                            name="password"
                        />

                        <Input 
                            type="password" 
                            placeholder="Confirme sua nova senha" 
                            onChange={e => this.setState({ passwordConfirm: e.target.value })}
                            value={passwordConfirm}
                            name="passwordConfirm"
                        />

                        <button>
                            <Icon path={mdiPlusCircleOutline}
                                size={1}
                                color="#fff"
                            />
                            <span>Salvar perfil</span>
                        </button>
                    </FormContainer>

                </Container>
            </>
        )
    }
}
