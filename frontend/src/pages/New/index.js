import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import api from '../../services/axios'
import { format, parseISO } from 'date-fns'
import { toast } from 'react-toastify'

import { Container, Form } from './styles'

import Header from '../../components/Header'

export default class New extends Component {
    state = {
        id: null,
        title: '',
        description: '',
        datetime: '',
        location: ''
    }

    async componentDidMount() {
        if(this.props.location.state && this.props.location.state.id) {
            const id = this.props.location.state.id
            const token = localStorage.getItem('meetapp_token')

            const { title, description, datetime, location } = await api.get(`/meetups/${id}`, {
                headers: {
                    Authorization: `Basic ${token}`
                }
            })

            this.setState({
                id,
                title, 
                description, 
                datetime: format(parseISO(datetime), 'dd/MM/yyyy'), 
                location
            })
        }
    }

    generateDate(datetime) {
        const [day, month, year] = datetime.split('/')
        return new Date(`${year}-${month}-${day}T10:00:00.000Z`)
    }

    handleSave = async () => {
        const token = localStorage.getItem('meetapp_token')
        const { id, title, description, datetime, location } = this.state
        
        if(id) { // Edição
            try {
                const date = this.generateDate(datetime)

                await api.put(`/meetups`, {
                    title,
                    description,
                    datetime: date,
                    location
                }, {
                    headers: {
                        Authorization: `Basic ${token}`,
                        id
                    }
                })

                toast.success(`A meetup ${title} foi atualizada com sucesso!`)
            }
            catch(err) {
                toast.error(err.msg)
            }
        }
        else { // Cadastro
            try {
                const date = this.generateDate(datetime)

                const meetup = await api.post(`/meetups`, {
                    title,
                    description,
                    datetime: date,
                    location,
                    banner_id: 1
                }, {
                    headers: {
                        Authorization: `Basic ${token}`
                    }
                })
            
                toast.success(`A meetup ${meetup.title} foi cadastrada com sucesso!`)
            }
            catch(err) {
                toast.error(err)
            }
        }

        this.setState({
            title: '', 
            description: '', 
            datetime: '', 
            location: ''
        })
        
        this.props.history.push('/dashboard')
    }

    render() {
        const { title, description, datetime, location } = this.state

        const user = JSON.parse(localStorage.getItem('meetapp_user'))

        return (
            <>
                <Header user={user.name} />

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
                            onChange={e => this.setState({ datetime: e.target.value })}
                            value={datetime}
                        />

                        <input 
                            type="text" 
                            placeholder="Localização da meetup" 
                            onChange={e => this.setState({ location: e.target.value })}
                            value={location}
                        />

                        <button onClick={this.handleSave}>
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
