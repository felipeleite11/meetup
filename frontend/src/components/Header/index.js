import React, { Component } from 'react'

import { Container, UserContainer } from './styles'

import logo from '../../assets/logo.png'

export default class Header extends Component {

    handleSignOut = () => {
        alert('handleSignOut')
    }
  
    render() {
        return (
            <Container>
                <img src={logo} />
                
                <UserContainer>
                    <div>
                        <strong>
                            Felipe Leite
                        </strong>
                        <span>
                            Meu perfil
                        </span>
                    </div>
                    <button onClick={this.handleSignOut}>
                        Sair
                    </button>
                </UserContainer>
            </Container>
        )
    }
}
