import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Meetups from '../Meetups'
import Subscribes from '../Subscribes'
import Profile from '../Profile'

export default createMaterialBottomTabNavigator({
    Meetups: { screen: Meetups },
    Subscribes: { screen: Subscribes },
    Profile: { screen: Profile }
})
