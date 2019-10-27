import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    opacity: 0.5;
`

export const Emoji = styled(Icon).attrs({
    name: 'frown'
})`
    color: #FFF;
    font-size: 60px;
`

export const Text = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
`