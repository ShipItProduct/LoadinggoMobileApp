import React,{useState,useEffect} from 'react'
import StatusBadge from '../Components/StatusBadges/StatusBadge'
import { Heading,Text,Container,Button ,Stack,Flex} from 'native-base';
import {ScrollView,StyleSheet,View} from 'react-native';
import axios from 'axios';
import { Root } from '../Config/root';
const TripDetails = ({tripId}) => {

    const [trip,setTrip] = useState({})
    const [vehicle,setVehicle] = useState({})

    useEffect(()=>{
        fetching();
    },[])

    const fetching=async()=>{
        try{
    var {data} = await axios.post(`${Root.production}/trip/getTripById`,{
        tripId
    })
    if(data.status==200){
        setTrip(data.message)
        var vehicleData = await axios.post(`${Root.production}/vehicle/getVehicleById`,{
            vehicleId : data.message.vehicleId
        })
        if(vehicleData.data.status==200){
            setVehicle(vehicleData.data.message)
        }else{
        console.log("erroresg==>",vehicleData.data.message)
        }
    }
}
catch(err){
    console.log('err==>',err.message)
}
    }

    return (
        <ScrollView>
        <Text style={styles.heading}>Trip Details</Text>

            <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:10}} >
            <Text>Status: </Text><StatusBadge tag='Open' />
            </View>  
            <View style={styles.container}>
                <Heading size="md" style={styles.subheading}>
                Carrier Details
                </Heading>
                <Container style={styles.data}>
                    <Text>
                    CarrierId : {trip.accountId}
                    </Text>
                </Container>
                
                <Heading size="md" style={styles.subheading}>
                Trip Details
                </Heading>
                <Container style={styles.data}>
                    <Text>
                    Trip Id : {trip._id}
                    </Text>
                    {/* <Text>
                        Contact Number : 03170112110
                    </Text>                     */}
                    <Text>
                    From : {trip.departureCity}
                    </Text>
                    <Text>
                    To : {trip.destinationCity}
                    </Text>
                    <Text>
                    Departure : {trip.departureAddress}
                    </Text>
                    <Text>
                    Destination : {trip.destinationAddress}
                    </Text>
                    <Text>
                    Departure Date : {trip.departureDate}
                    </Text>
                    <Text>
                    Departure Time : {trip.departureTime}
                    </Text>
                </Container>
               
                <Heading size="md" style={styles.subheading}>
                Vehicle Details
                </Heading>
                <Container style={styles.data}>
                    <Text>
                    Vehicle Id : {vehicle._id}
                    </Text>
                    <Text>
                    Manufacturer : {vehicle.manufacturer}
                    </Text>                    
                    <Text>
                    Model : {vehicle.model}
                    </Text>
                    <Text>
                    Year : {vehicle.year}
                    </Text>
                    <Text>
                    Number Plate : {vehicle.licensePlate}
                    </Text>
                </Container>
                {/* <Flex h={40} w={100} ml={'50%'} mt={5} mb={-20}>
                    <Button>Proceed</Button>
                </Flex> */}
            </View> 
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        paddingTop:20,
        paddingLeft:20,
        color:'black',
        fontWeight:'bold'
    },
    container:{
        marginLeft:'5%'
    },
    subheading:{
        marginTop:10
    },
    data:{
        marginTop:10,
        backgroundColor:'lightgray',
        padding:8,
        borderRadius:20,
        marginBottom:10        
    },
})

export default TripDetails
