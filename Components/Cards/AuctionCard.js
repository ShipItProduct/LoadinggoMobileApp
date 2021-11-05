import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'
import StatusBadge from '../StatusBadges/StatusBadge'

const AuctionCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.auctionCard} >
                <Text>AUCTION</Text>
                <Title>Auction #jknsjdkn</Title>
                <Text>From : Destination</Text>
                <Text>To: Desitaination</Text>
                <View style={{flexDirection:'row',alignItems:'center'}} >
            <Text>Status: </Text><StatusBadge />
            </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    auctionCard: {
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#F1F1F1',
        marginTop: 10,
        marginTop: 5,
    },
})

export default AuctionCard
