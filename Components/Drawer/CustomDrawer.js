import React,{useState,useEffect} from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { Avatar, Title } from 'react-native-paper';
import { useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const CustomDrawer = ({navigation}) => {

    let currentRole = useSelector(state=>state.role)
    let user = useSelector(state=>state.user)
    var [userData,setUserData] = useState({})
    useEffect(()=>{
        setUserData(user)
    },[])

    return (
        <ScrollView contentContainerStyle={styles.customDrawer} >
            <Avatar.Image size={120} source={userData.account ? {uri:userData.account.profilePic} : null} />
            <Title style={{ color: 'white' }}>{userData.account ? userData.account.firstName : '[UserName]'}</Title>
            {
                currentRole === "Shipper" ? (
                    <View style={{ width: '100%' }} >
                    <TouchableOpacity style={styles.dashboardItemOdd} >
                        <View  >
                            <Title style={{ color: 'white',fontSize:18  }}
                            onPress={()=>navigation.navigate('Profile')}
                            >
                            <FontAwesome name='user' size={20} color='white' />
                                {" "}My Profile</Title>
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View >
                                <Title style={{ color: 'white',fontSize:18 }} onPress={()=>navigation.navigate('Dashboard',{id:1234})}>
                <MaterialIcons name='dashboard' size={20} color='white' />
                                    {" "}Dashboard</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} onPress={()=>navigation.navigate('AvailableTrips',{id:1234})}>
                                <MaterialIcons name='home' size={20} color='white' />
                                    {" "}Home</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} onPress={()=>navigation.navigate('CreateAuction',{id:1234})}>
                                <MaterialIcons name='add' size={20} color='white' />
                                    {" "}Create Auction</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemOdd} >
                            <View  >
                                <Title style={{ color: 'white' ,fontSize:18 }} onPress={()=>navigation.navigate('MyAuctions',{id:1234})}>
                                <MaterialIcons name='list-alt' size={20} color='white' />
                                    {" "}My Auction</Title>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} onPress={()=>navigation.navigate('my-shipments',{id:1234})}>
                                <MaterialCommunityIcons name='truck-delivery' size={20} color='white' />
                                    {" "}My Shipments</Title>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{ width: '100%' }} >
                        <TouchableOpacity style={styles.dashboardItemEven} >
                            <View  >
                                <Title style={{ color: 'white',fontSize:18  }} onPress={()=>navigation.navigate('Dashboard',{id:1234})}>
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
