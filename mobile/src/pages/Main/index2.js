import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
//import React from 'react'
//import { Image } from 'react-native'

import Meetups from '../Meetups'
import Subscribes from '../Subscribes'
import Profile from '../Profile'

//import logo from '../../assets/logo.png'

// Documentação
// https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html

export default createMaterialBottomTabNavigator({
    Meetups: { 
        screen: Meetups,
        navigationOptions: {
            title: 'Meetups',
            //headerLeft: <Image source={logo} />,
            headerStyle: {
                backgroundColor: '#ff0000',
            },
            headerTintColor: '#FFF',
            tabBarBadge: 10,
            tabBarIcon: ({tintColor}) => (<Icon name="list-ul" color={tintColor} size={24} />)
        }
    },

    Subscribes: { 
        screen: Subscribes,
        navigationOptions: {
            title: 'Inscrições',
            headerStyle: {
                backgroundColor: '#ff0000',
            },
            headerTintColor: '#FFF',
            tabBarBadge: 3,
            tabBarIcon: ({tintColor}) => (<Icon name="tag" color={tintColor} size={24} />)
        }
    },

    Profile: { 
        screen: Profile,
        navigationOptions: {
            title: 'Meu perfil',
            headerStyle: {
                backgroundColor: '#ff0000',
            },
            headerTintColor: '#FFF',
            tabBarIcon: ({tintColor}) => (<Icon name="user" color={tintColor} size={24} />)
        }
    }
}, {
    defaultNavigationOptions: {
        title: 'Application Name',
        headerStyle: {
          backgroundColor: '#e3e3e3',
        },
        headerTintColor: '#606070'
        
        //tabBarOnPress  (TALVEZ PRECISE)  https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html#tabbaronpress
    },

    initialRouteName: 'Meetups',
    activeColor: '#FFF',
    inactiveColor: '#BBB',
    backBehavior: 'initialRoute',
    barStyle: {
        paddingVertical: 5,
        backgroundColor: '#2c2c2c'
    }
})
