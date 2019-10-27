import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Meetups from '../Meetups'
import Subscribes from '../Subscribes'
import Profile from '../Profile'

// Documentação do Top Bar Navigator
// https://reactnavigation.org/docs/en/material-top-tab-navigator.html

export default createMaterialTopTabNavigator({
    Meetups: { 
        screen: Meetups,
        navigationOptions: {
            title: 'Meetups',
            tabBarIcon: ({tintColor}) => (<Icon name="list-ul" color={tintColor} size={24} />)
        }
    },

    Subscribes: { 
        screen: Subscribes,
        navigationOptions: {
            title: 'Inscrições',
            tabBarIcon: ({tintColor}) => (<Icon name="tag" color={tintColor} size={24} />)
        }
    },

    Profile: { 
        screen: Profile,
        navigationOptions: {
            title: 'Meu perfil',
            tabBarIcon: ({tintColor}) => (<Icon name="user" color={tintColor} size={24} />)
        }
    }
}, {
    initialRouteName: 'Meetups',
    backBehavior: 'initialRoute',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeColor: '#FFF',
        inactiveColor: '#BBB',
        showIcon: true,
        style: {
            backgroundColor: '#2B1A2F'
        },
        indicatorStyle: {
            height: 0,
            backgroundColor: '#FFF'
        },
        labelStyle: {
            textTransform: 'capitalize'
        }
    },

    // defaultNavigationOptions: {
    //     title: 'Application Name',
    //     // headerStyle: {
    //     //   backgroundColor: '#e3e3e3',
    //     // },
    //     headerTintColor: '#FFF'
    // }
})
