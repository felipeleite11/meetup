import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['#25212E', '#3D2742']
})`
    height: 100%;
    padding: 30px;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.Image`
    margin-bottom: 40px;
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

export const InnerText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
`

export const Link = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 20px;
`
  
