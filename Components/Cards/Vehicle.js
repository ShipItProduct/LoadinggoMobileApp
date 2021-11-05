import React from 'react'
import { StyleSheet, View , Text, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'
import StatusBadge from '../StatusBadges/StatusBadge'

const Vehicle = () => {
    return (
        <TouchableOpacity>
        <View style={styles.vehicleCard} >
            <Text>VEHICLE</Text>
            <Title>Vehicle #jknsjdkn</Title>
            <Text>Name: </Text>
            <Text>Model:</Text>
            <Text>Color: </Text>
            <View style={{flexDirection:'row',alignItems:'center'}} >
            <Text>Status: </Text><StatusBadge tag='On Hold' />
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    vehicleCard:{
        borderWidth:1,
        width:'90%',
        alignSelf:'center',
        borderRadius:5,
        padding:10,
        backgroundColor:'white',
        borderColor:'#F1F1F1',
        marginTop:10,
        marginTop:5,
    },
})

export default Vehicle
