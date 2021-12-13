import MapViewDirections from 'react-native-maps-directions';
 import React,{useState} from 'react';
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,PermissionsAndroid, Button } from 'react-native';



export default function RoutedMap({shipmentData,from}) {
  let [region,setRegion]=useState()


  const firstOrigin = {latitude: from.latitude, longitude: from.longitude };
const firstDestination = {latitude: shipmentData[0].latitude, longitude: shipmentData[0].longitude };
const GOOGLE_MAPS_APIKEY = 'AIzaSyDhX60syaCg5jYirejPmeWfLHubpa2kPXo';
region={
  latitude:  from.latitude,
  longitude: from.longitude ,
  latitudeDelta: 0.001,
  longitudeDelta: 0.001,
}

    const onRegionChange=(reg)=> {
      setRegion(reg);
    }
    return (
    <View style={styles.container}>

<MapView initialRegion={region}
       style={styles.map}
       zoomEnabled={true}
       zoomControlEnabled={true}
       zoomTapEnabled={true}
       scrollEnabled={true}
       rotateEnabled={true}
       loadingEnabled={true}
       >
                    <Marker
                    coordinate={firstOrigin}
                    />
                    <Marker
                    coordinate={firstDestination}
                    />
  <MapViewDirections
    origin={firstOrigin}
    destination={firstDestination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    onReady={result=>{
      // console.log(result.distance+'km')
      // console.log(result.duration+'min')
    }}
/>
    {
      shipmentData.map((v,i)=>{
        if(i<shipmentData.length-1){
          var origin={
            latitude: shipmentData[i].latitude, longitude: shipmentData[i].longitude 
          }
          var destination={
            latitude: shipmentData[i+1].latitude, longitude: shipmentData[i+1].longitude 
          }
          return(
            <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            onReady={result=>{
              // console.log(result.distance+'km')
              // console.log(result.duration+'min')
            }}
        />
          )
        }
      })
    }
    
    {
      shipmentData.map((v,i)=>{
        if(i<shipmentData.length-1){
          var mark={
            latitude: shipmentData[i+1].latitude, longitude: shipmentData[i+1].longitude 
          }
          return(

            <Marker
            coordinate={mark}
            />          )
        }
      })
    }
</MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width:'90%',
    height:350,
    marginTop:10
  },
});