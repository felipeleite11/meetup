import React from 'react'

import { Container, Text, Emoji } from './styles'

export default function EmptyList() {
    return (
        <Container>
            <Emoji />
            <Text>
                Nenhuma meetup aqui!
            </Text>
        </Container>
    )
}