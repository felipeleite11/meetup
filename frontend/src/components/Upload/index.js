import React from 'react'
import Icon from '@mdi/react'
import { mdiCamera } from '@mdi/js'

import api from '../../services/axios'

import { Container } from './styles'

export default class Upload extends React.Component {
    state = {
        file: null,
        banner_id: null
    }

    handleChange = async e => {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })

        const token = localStorage.getItem('meetapp_token')
        
        const data = new FormData()
        data.append('file', e.target.files[0])

        const response = await api.post('/files', data, {
            headers: {
                Authorization: `Basic ${token}`
            }
        })

        this.setState({
            banner_id: response.id
        })
    }

    render() {
        const { file } = this.state

        return (
            <Container>
                <label htmlFor="banner">
                    {file ? (
                        <img src={file} alt="" />
                    ) : (
                        <div>
                            <Icon path={mdiCamera}
                                size={2}
                                color="#fff"
                            />
                            <span>Selecionar imagem</span>
                        </div>
                    )}

                    <input 
                        type="file" 
                        id="banner"
                        accept="image/*"
                        onChange={e => this.handleChange(e)}
                    />
                </label>
            </Container>
        )
    }
}
