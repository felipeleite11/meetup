import React, { Component, createRef } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import api from '../../services/axios'
import { toast } from 'react-toastify'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { Container, FormContainer } from './styles'

import Header from '../../components/Header'
//import BannerImage from '../../components/BannerImage'
//import ImagePreviewer from '../../components/ImagePreviewer'
import Upload from '../../components/Upload'

export default class New extends Component {
    state = {
        id: null,
        title: 'Minha meetup',
        description: 'Descrição da minha meetup.',
        datetime: '2019-12-31 07:00:00',
        location: 'Rua x, sala 2'
    }

    bannerImageRef = null

    validation = Yup.object().shape({
        title: Yup.string()
            .min(3, 'O título deve conter pelo menos 3 caracteres')
            .max(100, 'O título deve conter no máximo 100 caracteres')
            .required('Especifique um título para a meetup.'),
        description: Yup.string()
            .min(3, 'Especifique uma descrição de 3 a 200 caracteres.')
            .max(200, 'Especifique uma descrição de 3 a 200 caracteres.'),
        datetime: Yup.date('Este campo deve conter uma data válida.')
            .required('Especifique a data e horário da meetup'),
        location: Yup.string()
            .min(3, 'O endereço deve conter pelo menos 3 caracteres')
    })

    async componentDidMount() {
        this.bannerImageRef = createRef()

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
                datetime, 
                location
            })
        }
    }

    generateDate(datetime) {
        const [day, month, year] = datetime.split('/')
        return new Date(`${year}-${month}-${day}T10:00:00.000Z`)
    }

    handleSubmit = async data => {
        const { id } = this.state
        const token = localStorage.getItem('meetapp_token')
        
        data.banner_id = this.bannerImageRef.current.state.banner_id
        
        if(id) { // Edição
            try {
                await api.put(`/meetups`, data, {
                    headers: {
                        Authorization: `Basic ${token}`,
                        id
                    }
                })

                toast.success(`A meetup ${data.title} foi atualizada com sucesso!`)
            }
            catch(err) {
                toast.error(err.msg)
            }
        }
        else { // Cadastro
            try {
                const meetup = await api.post(`/meetups`, data, {
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
                    
                    <FormContainer onSubmit={this.handleSubmit} schema={this.validation} className="validable">
                        
                        {/* <BannerImage name="banner_id" /> */}

                        {/* <ImagePreviewer name="banner_id" /> */}

                        <Upload ref={this.bannerImageRef} />

                        <Input 
                            type="text" 
                            placeholder="Título da meetup"
                            onChange={e => this.setState({ title: e.target.value })}
                            value={title}
                            name="title"
                        />

                        <Input 
                            multiline
                            placeholder="Descrição completa" 
                            rows="6"
                            onChange={e => this.setState({ description: e.target.value })}
                            value={description}
                            name="description"
                        />

                        <Input
                            type="text" 
                            placeholder="Data da meetup" 
                            onChange={e => this.setState({ datetime: e.target.value })}
                            value={datetime}
                            name="datetime"
                        />

                        <Input 
                            type="text" 
                            placeholder="Localização da meetup" 
                            onChange={e => this.setState({ location: e.target.value })}
                            value={location}
                            name="location"
                        />

                        <button>
                            <Icon path={mdiPlusCircleOutline}
                                size={1}
                                color="#fff"
                            />
                            <span>Salvar meetup</span>
                        </button>
                    </FormContainer>

                </Container>
            </>
        )
    }
}
