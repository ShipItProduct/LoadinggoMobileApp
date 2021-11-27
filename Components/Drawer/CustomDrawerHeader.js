import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { setUserType } from '../../Store/action.js'
import {Button} from 'native-base';


const CustomDrawerHeader = ({ navigation }) => {

    const dispatch = useDispatch()
    
    const currentRole = useSelector(state => state.role)


    const handleRoleChange = async () => {
        if (currentRole === "Shipper") {
            dispatch(setUserType("Carrier"))
        } else {
            dispatch(setUserType("Shipper"))
        }
    }

    return (
        <View style={styles.customHeader} >
            <View style={{ flexDirection: 'row' }} >
                <Icon name='menu' size={35} color='white' onPress={() => navigation.openDrawer()} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Text style={{ color: 'white' }} >Shipper</Text>
                <Switch color='#ffffff' value={currentRole === "Shipper" ? false : true} onValueChange={handleRoleChange} />
                <Text style={{ color: 'white' }} >Carrier</Text>
            </View>
           <Button style={{backgroundColor:'white',height:33}}>
               <Text style={{color:'black',fontSize:11}} >
                Logout
                </Text>              
           </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    customHeader: {
        height: 50,
        backgroundColor: '#1A2387',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    headerTitle: {
        color: 'white'
    }
})

export default CustomDrawerHeader
