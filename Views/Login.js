import React, { useState } from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { Button, Headline , TextInput , Modal , ActivityIndicator , Colors } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import {root} from '../Config/root'

const Login = ({navigation}) => {

    let [email , setEmail] = useState('')
    let [password , setPassword] = useState('')

    const [disabled , setDisabled] = useState(false)

    const handleLogin = async () =>{
        
        try {
            // setDisabled(true)
            // const {data} = await axios.post(`${root.dev}/user/login` , {email: email , password:password})
            // const user = JSON.stringify({
            //     email: data.message.email,
            //     token: data.message.token,
            //     userId:data.message.userId,
            //     account:data.message.account
            // })
            // await AsyncStorage.setItem("user" , user);
            // await AsyncStorage.setItem("CurrentRole" , "Shipper");

            navigation.navigate('dashboard-app')
            // setDisabled(false)
        } catch (error) {
            console.log(error);
        }


        
        
    }



    return (
        <View style={styles.loginPage} >
            <Headline style={styles.header} >Welcome Back</Headline>
            <Text style={styles.header} >Please Log In To Continue</Text>
            <View style={{alignItems:'center'}}  >
                <TextInput label='Email' mode='outlined' style={styles.input} value={email} onChangeText={(text) => setEmail(text) } left={<TextInput.Icon name='email-outline' />}  />
                <TextInput label='Password' mode='outlined' style={styles.input} secureTextEntry value={password} onChangeText={(text) => setPassword(text)} left={<TextInput.Icon name='lock-outline' />} />
                <Text
                onPress={() => navigation.navigate('EnterEmailForForgetPassword')}
                style={{color:'blue'}}>
                Forgot Password?
            </Text>
            {
                disabled ? (<ActivityIndicator animating={true} color={Colors.black} />) : (
                    <Button mode='contained' onPress={handleLogin} style={styles.loginBtn} > Log In</Button>
                )
            }
            </View>
            
            <View style={styles.orSection} >
                <View style={styles.hr} ></View>
                <Text style={{color:'black'}} > OR </Text>
                <View style={styles.hr} ></View>
            </View>
            <View style={styles.socialBtns} >
                <Button icon="google"  mode='contained' onPress={() => console.log('pressed')} style={styles.loginBtn} color='red' >Log In With Google</Button>
                <Button icon="facebook" mode='contained' onPress={() => console.log('pressed')} style={styles.loginBtn} color='blue'>Log In With Facebook</Button>
            </View>
            <Text
                style={{color:'blue'}}
                onPress={() => navigation.navigate('Register')}
            >
                New here? Register now.
            </Text>
        </View>
        
    )
}


const styles = StyleSheet.create({
    loginPage:{
        alignItems:'center',
        backgroundColor:'white',
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    },
    header:{
        color:'black',
    },
    inputSection:{
        justifyContent:'flex-start'
    },
    input:{
        width:300,
        margin:5
    },
    orSection:{
        flexDirection:'row',
        alignItems:'center',
        width:300
    },
    hr:{
        flex:1,
        height:1,
        backgroundColor:'black'
    },
    loginBtn:{
        width:300,
        margin:5
    }
})

export default Login
