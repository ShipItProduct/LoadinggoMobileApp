import React from 'react'
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserDashboard from './UserDashboard';
import UserProfile from './UserProfile';
import AvailableListings from './AvailableListings';




const Drawer = createDrawerNavigator();

const Dashboard = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={UserDashboard} />
            <Drawer.Screen name="Profile" component={UserProfile} />
            <Drawer.Screen name="Available Listings" component={AvailableListings} />
        </Drawer.Navigator>
    )
}

export default Dashboard
