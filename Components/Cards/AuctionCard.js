import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Title } from 'react-native-paper'
import StatusBadge from '../StatusBadges/StatusBadge'
import { Link } from '@react-navigation/native';

const AuctionCard = ({data}) => {
    return (
        <Pressable>
            <View style={styles.auctionCard} >
                <Title>Auction # {data._id}</Title>
                <Text>From : {data.pickupCity}</Text>
                <Text>To: {data.destinationCity}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}} >
            <Text>Status: </Text><StatusBadge tag={data.status}/>
            </View>
                <Link to={{ screen: 'AuctionDetails', params: { id: data._id } }}>
                View Details &gt;&gt;
                </Link>
            </View>
        </Pressable>
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
