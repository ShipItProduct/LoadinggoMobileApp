import React, { useState, useEffect  } from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { Avatar, Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CustomDrawer = () => {

    let [currentRole, setCurrentRole] = useState('')

    useEffect(() => {
        async function getUserRole() {
            const value = await AsyncStorage.getItem('CurrentRole')
            console.log(value);
            setCurrentRole(value)
        }
        getUserRole()
    }, [currentRole])

    return (
        <ScrollView contentContainerStyle={styles.customDrawer} >
            <Avatar.Image size={150} source={require('../../Assets/cat.jpg')} />
            <Title style={{ color: 'white' }}>[USERNAME]</Title>
            {
                currentRole === "Shipper" ? (
                    <View style={{ width: '100%' }} >
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white' }} >Dashboard</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' }} >Create Auction</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white' }} >My Auction</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' }} >My Shipments</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white' }} >Available Trips</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' }} >My Profile</Title>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{ width: '100%' }} >
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white' }} >Dashboard</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' }} >Open Auctions</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white' }} >Manage Vehicles</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' }} >My Offers</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white' }} >My Trips</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' }} >My Profile</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' }} >Current Shipment</Title>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    customDrawer: {
        backgroundColor: '#1A2387',
        flex: 1,
        alignItems: 'center',
        paddingTop: 60
    },
    dashboardItemEven: {
        padding: 10,
        backgroundColor: 'blue'
    },
    dashboardItemOdd: {
        padding: 10,
    }
})

export default CustomDrawer
