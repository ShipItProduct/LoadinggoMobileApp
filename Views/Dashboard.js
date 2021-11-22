import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import UserDashboard from './UserDashboard';
import UserProfile from './UserProfile';
import AvailableListings from './AvailableListings';
import CustomDrawer from '../Components/Drawer/CustomDrawer';
import CustomDrawerHeader from '../Components/Drawer/CustomDrawerHeader';




const Drawer = createDrawerNavigator();

const Dashboard = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{
            header: ({ navigation, route, options }) => {
                const title = getHeaderTitle(options, route.name);
                return (
                    <CustomDrawerHeader title={title} navigation={navigation} />
                    )
            }
        }} >
            <Drawer.Screen name="Dashboard" component={UserDashboard} />
            <Drawer.Screen name="Profile" component={UserProfile} />
            <Drawer.Screen name="Available Listings" component={AvailableListings} />
        </Drawer.Navigator>
    )
}

export default Dashboard
