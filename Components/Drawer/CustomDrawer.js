import React, { useState, useEffect  } from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { Avatar, Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const CustomDrawer = ({navigation}) => {

    let currentRole = useSelector(state=>state.role)
    console.log('currentRole==>',currentRole)

    return (
        <ScrollView contentContainerStyle={styles.customDrawer} >
            <Avatar.Image size={120} source={require('../../Assets/cat.jpg')} />
            <Title style={{ color: 'white' }}>[userName]</Title>
            {
                currentRole === "Shipper" ? (
                    <View style={{ width: '100%' }} >
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View >
                                <Title style={{ color: 'white',fontSize:18 }}>
                <MaterialIcons name='dashboard' size={20} color='white' />
                                    {" "}Dashboard</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }}>
                                <MaterialIcons name='add' size={20} color='white' />
                                    {" "}Create Auction</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white' ,fontSize:18 }}>
                                <MaterialIcons name='list-alt' size={20} color='white' />
                                    {" "}My Auction</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }}>
                                <MaterialCommunityIcons name='truck-delivery' size={20} color='white' />
                                    {" "}My Shipments</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }}>
                                <MaterialIcons name='home' size={20} color='white' />
                                    {" "}Home</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }}
                                onPress={()=>navigation.navigate('Profile')}
                                >
                                <FontAwesome name='user' size={20} color='white' />
                                    {" "}My Profile</Title>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{ width: '100%' }} >
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }}>
                                <MaterialIcons name='dashboard' size={20} color='white' />
                                    {" "}Dashboard</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }}>
                                <FontAwesome5 name='gavel' size={20} color='white' />
                                    {" "}Open Auctions</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} >
                                <MaterialCommunityIcons name='car-multiple' size={20} color='white' />
                                    {" "}Manage Vehicles</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }}>
                                <MaterialIcons name='list-alt' size={20} color='white' />
                                    {" "}My Orders</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} >
                                <MaterialIcons name='car-repair' size={20} color='white' />
                                    {" "}My Trips</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} 
                                onPress={()=>navigation.navigate('Profile')}
                                >
                                <FontAwesome name='user' size={20} color='white' />
                                    {" "}My Profile</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} >
                                <MaterialCommunityIcons name='truck-delivery-outline' size={20} color='white' />
                                    {" "}Current Shipment</Title>
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
        paddingTop: 50,
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
