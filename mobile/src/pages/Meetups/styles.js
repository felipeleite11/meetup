import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Container = styled(LinearGradient).attrs({
    colors: ['#25212E', '#3D2742']
})`
    height: 100%;
    padding: 0 30px;
    justify-content: flex-start;
    align-items: center;
`

export const Paginator = styled.View`
    flex-direction: row;
    align-items: flex-start;
    padding-top: 30px;
`

export const PaginatorText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    padding: 0 26px 20px;
`

export const PaginatorArrow = styled(Icon)`
    font-size: 20px;
    color: #FFF;
    padding: 15px 18px;
    height: 50px;
    margin-top: -10px;
`

export const List = styled.FlatList`
    width: 100%;
    opacity: ${props => props.refreshing ? '0.2' : '1'};
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

// export const PlaceholderText = styled.Text`
//     color: #FFF;
//     font-size: 30px;
//     width: 100%;
//     height: 100%;
//     justify-content: center;
//     align-items: center;
// `