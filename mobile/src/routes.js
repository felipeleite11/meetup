import React from 'react'
import { Image, Dimensions  } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import logo from './assets/logo.png'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Main from './pages/Main'

const screenCenter = Math.round(Dimensions.get('window').width) / 2
const logoSize = 26

const Routes = createAppContainer(
    createStackNavigator({
        SignIn,
        SignUp,
        Main
    }, {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#191720'
            },
            headerTintColor: '#FFF',     //Back arrow color
            headerBackImage: <Image source={logo} style={{width: logoSize, height: logoSize, marginLeft: screenCenter - logoSize}} />
            // headerTitleStyle: {
            //     color: '#FFF'         // Title color
            // },
            //headerTitle: 'MEETAPP'     // Title
        },
        header: {
            style: {
                textAlign: 'center'
            }
        }
    })
)

export default Routes