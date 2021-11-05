import React, { useEffect, useState } from 'react'
import { Text  , View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuctionCard from '../Components/Cards/AuctionCard';
import { ScrollView } from 'react-native-gesture-handler';
import Shipment from '../Components/Cards/Shipment';
import Trip from '../Components/Cards/Trip';
import Bid from '../Components/Cards/Bid';
import Vehicle from '../Components/Cards/Vehicle';


const UserDashboard = () => {

    // let [currentUser , setCurrentUser] = useState()

    // useEffect(() => {
    //     async function getUser(){
    //         const value = await AsyncStorage.getItem('user')
    //         console.log(value);
    //     }
    //     getUser()
    // }, [0])

    


    return (
        <View>
            <ScrollView>
            <AuctionCard />
            <Shipment />
            <Trip />
            <Bid />
            <Vehicle />
            </ScrollView>
        </View>
    )
}

export default UserDashboard
