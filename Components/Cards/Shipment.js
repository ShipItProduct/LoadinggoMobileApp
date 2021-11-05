import React from 'react'
import { StyleSheet, View , Text, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'
import StatusBadge from '../StatusBadges/StatusBadge'

const Shipment = () => {
    return (
        <TouchableOpacity>
        <View style={styles.shipmentCard} >
            <Text>SHIPMENT OFFER</Text>
            <Title>Shipment #jknsjdkn</Title>
            <Text>From : Destination</Text>
            <Text>To: Desitaination</Text>
            <View style={{flexDirection:'row',alignItems:'center'}} >
            <Text>Status: </Text><StatusBadge tag='Closed' />
            </View>
            <Text>Cost: $$$</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shipmentCard:{
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

export default Shipment
