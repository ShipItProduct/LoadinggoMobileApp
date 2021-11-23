import React from 'react'
import { Text,View,StyleSheet } from 'react-native'

const UserProfile = () => {
    return (
        <View>
            <Text style={styles.heading}>My Profile</Text>
            <View
            style={{width:'50%',height:'100%'}} >
                <Text style={styles.tags}>Current Address :</Text>
                <Text style={styles.tags}>Date Of Birth :</Text>
                <Text style={styles.tags}>Phone Number :</Text>
                <Text style={styles.tags}>Gender :</Text>
                <Text style={styles.tags}>Carrier Role :</Text>
                <Text style={styles.tags}>Shipper Role :</Text>
            </View>
            <View
            style={{width:'50%',height:'100%',position:'absolute',left:"50%",top:'13%'}}>
                <Text style={styles.data}>Street # 2 Landhi Sindh,Kashmir.</Text>
                <Text style={styles.data}>2021-10-13</Text>
                <Text style={styles.data}>3170112101</Text>
                <Text style={styles.data}>Male</Text>
                <Text style={styles.data}>Enabled</Text>
                <Text style={styles.data}>Enabled</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        padding:20,
        color:'black',
        height:'13%'
    },
    tags:{
        fontSize:17,
        paddingTop:25,
        paddingLeft:20,
        textDecorationColor:'black',
        textDecorationLine:'underline'
    },
    data:{
        fontSize:15,
        paddingTop:25,
        paddingLeft:20,
        textDecorationColor:'black',
        textDecorationLine:'underline'
    }
})

export default UserProfile
