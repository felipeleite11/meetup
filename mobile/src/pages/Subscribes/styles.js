import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Container = styled(LinearGradient).attrs({
    colors: ['#25212E', '#3D2742']
})`
    height: 100%;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
`

export const Card = styled.View`
    height: auto;
    background: #FFF;
    border-radius: 4px;
    margin: 12px 0;
`

export const CardInfo = styled.View`
    padding: 14px;
`

export const InfoContainer = styled.View`
    flex-direction: row;
    padding: 10px 5px 0;
    justify-content: flex-start;
    align-items: center;
`


export const List = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false
})`
    width: 100%;
`

export const CardTitle = styled.Text`
    font-weight: bold;
    font-size: 22px;
`

export const CardImage = styled.Image`
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    height: 120px;
`

export const CardIcon = styled(Icon)`
    width: auto;
    width: 12px;
    justify-content: center;
`

export const CardText = styled.Text`
    color: #7d7d7d;
    font-size: 16px;
    margin-left: 5px;
`

export const Button = styled.TouchableOpacity`
    border-radius: 4px;
    max-width: 100%;
    background-color: #E5556E;
    align-items: center;
    padding: 14px;
    margin: 15px 0;
`

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
`
