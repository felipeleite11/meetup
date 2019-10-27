import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['#25212E', '#3D2742']
})`
    height: 100%;
    padding: 0 30px;
    justify-content: flex-start;
    align-items: center;
`

export const Input = styled.TextInput`
    background-color: #FFF;
    color: #2c2c2c;
    width: 100%;
    border-radius: 4;
    font-size: 20px;
    margin: 10px 0;
    padding: 14px 10px;
`

export const Button = styled.TouchableOpacity`
    border-radius: 4px;
    width: 100%;
    background-color: #E5556E;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
`

export const DarkButton = styled.TouchableOpacity`
    border-radius: 4px;
    width: 100%;
    background-color: #D44059;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
`

export const InnerText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
`

export const Divider = styled.View`
    border-bottom-color: #4e4e4e;
    border-bottom-width: 1;
    width: 100%;
    margin: 16px 0 10px;
`