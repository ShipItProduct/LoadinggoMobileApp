import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Headline, Surface,  Title } from 'react-native-paper';
import { useSelector } from 'react-redux'
import AuctionCard from '../Components/Cards/AuctionCard';
import Shipment from '../Components/Cards/Shipment';
import Trip from '../Components/Cards/Trip';


const UserDashboard = () => {


    const currentRole = useSelector(state => state.currentRole)

    console.log(currentRole);





    return (
        currentRole === "Shipper" ? (
            < ScrollView style={styles.shipperDashboardPage} >
            <View style={{flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}} >
                <Headline style={{width:'50%'}} >Welcome back, Shipper</Headline>
            </View>
            <View style={styles.dashboardStats}  >
                <Surface style={styles.dashStatItem} >
                    <Text style={{ color: 'black' }} >
                        Active Offers:
                    </Text>
                    <Text>10</Text>
                </Surface>
                <Surface style={styles.dashStatItem} >
                    <Text style={{ color: 'black' }} >
                        Completed Offers:
                    </Text>
                    <Text>10</Text>
                </Surface>
                <Surface style={styles.dashStatItem} >
                    <Text style={{ color: 'black' }} >
                        Feedback:
                    </Text>
                    <Text>10</Text>
                </Surface>
            </View>
            <Title>Active Offers</Title>
            <Shipment />
            <Shipment />
            <Shipment />
            <Title>Open Trips</Title>
            <Trip />
            <Trip />
            <Trip />
            <Trip />
            
        </ScrollView>
        ) : (
            < ScrollView style={styles.shipperDashboardPage} >
            <View style={{flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}} >
                <Headline style={{width:'50%'}} >Welcome back, Carrier</Headline>
            </View>
            <View style={styles.dashboardStats}  >
                <Surface style={styles.dashStatItem} >
                    <Text style={{ color: 'black' }} >
                        Active Offers:
                    </Text>
                    <Text>10</Text>
                </Surface>
                <Surface style={styles.dashStatItem} >
                    <Text style={{ color: 'black' }} >
                        Completed Offers:
                    </Text>
                    <Text>10</Text>
                </Surface>
                <Surface style={styles.dashStatItem} >
                    <Text style={{ color: 'black' }} >
                        Feedback:
                    </Text>
                    <Text>10</Text>
                </Surface>
            </View>
            <Title>Active Offers</Title>
            <Shipment />
            <Shipment />
            <Shipment />
            <Title>Open Auctions</Title>
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
        </ScrollView>
        )
        
    )
}

const styles = StyleSheet.create({
    shipperDashboardPage: {
        width: '90%',
        alignSelf: 'center'
    },
    dashboardStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center'
    },
    dashStatItem: {
        alignItems: 'center',
        height: 95,
        width: 95,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        textAlign: 'center'
    }
})

export default UserDashboard
