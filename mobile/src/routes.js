import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Main from './pages/Main'

const Routes = createAppContainer(
    createStackNavigator({
        SignIn,
        SignUp,
        Main
    }, {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: true,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2c2c2c'
            },
            headerTintColor: '#FFF'
        }
    })
)

export default Routes