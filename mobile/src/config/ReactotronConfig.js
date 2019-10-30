import Reactotron from 'reactotron-react-native'
import { REACT_APP_IP } from 'react-native-dotenv'

if(__DEV__) {
    const tron = Reactotron.configure({ host: REACT_APP_IP }).useReactNative().connect()

    console.tron = tron

    tron.clear()
}
