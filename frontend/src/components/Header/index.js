import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, UserContainer } from './styles'

import logo from '../../assets/logo.png'

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Link to="/dashboard">
                    <img src={logo} />
                </Link>
                
                <UserContainer>
                    <div>
                        <strong>
                            {this.props.user}
                        </strong>
                        <Link to="/profile">
                            <span>
                                Meu perfil
                            </span>
                        </Link>
                    </div>

                    <Link to="/logout">
                        <button>
                            Sair
                        </button>
                    </Link>
                </UserContainer>
            </Container>
        )
    }
}
