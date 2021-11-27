import React,{useEffect,useState} from 'react'
import {ScrollView,Text,StyleSheet,View} from 'react-native';
import {Button} from 'native-base'
import Trip from '../Components/Cards/Trip';
import axios from 'axios';
import { Root } from '../Config/root';

const AvailableTrips = () => {

    const [allTrips,setAllTrips] = useState([]);

    useEffect(()=>{
        fectching();
    },[])

    const fectching=async()=>{
        var {data} = await axios.get(`${Root.production}/trip/getAllActiveTrips`);
        if(data.status===200){
            setAllTrips(data.message);
            console.log('done hai')
        }else{
            console.log('error hai')
        }
    }

    return (
        <View>
            <Text style={styles.heading}>Available Trips</Text>
      <ScrollView>
          {allTrips &&
          allTrips.reverse().map((v,i)=>{
              return(
                  <Trip  data={v}/>
              )
          })}
        </ScrollView>
        </View>
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
    button1:{
        width:70,
        height:40,
    },
    button:{
        width:80,
        height:40,
        marginLeft:-12
    },
    btn_group:{
        marginTop:20,
        marginBottom:20
    }
})


export default AvailableTrips
