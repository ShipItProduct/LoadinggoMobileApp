import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Title, Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserRole } from '../../Store/user'

const CustomDrawerHeader = ({ title, navigation }) => {

    const dispatch = useDispatch()
    
    const currentRole = useSelector(state => state.currentRole)

    console.log(currentRole);

    const handleRoleChange = async () => {
        if (currentRole === "Shipper") {
            dispatch(changeUserRole("Carrier"))
        } else {
            dispatch(changeUserRole("Shipper"))
            console.log(currentRole);   
        }
    }

    return (
        <View style={styles.customHeader} >
            <View style={{ flexDirection: 'row' }} >
                <Icon name='menu' size={35} color='white' onPress={() => navigation.openDrawer()} />
                <Title style={styles.headerTitle} >{title}</Title>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Text style={{ color: 'white' }} >Shipper</Text>
                <Switch color='#ffffff' value={currentRole === "Shipper" ? false : true} onValueChange={handleRoleChange} />
                <Text style={{ color: 'white' }} >Carrier</Text>
            </View>
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
