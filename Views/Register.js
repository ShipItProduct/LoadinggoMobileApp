import React, { useState } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { Button, Headline , TextInput} from 'react-native-paper'

const Register = ({navigation}) => {

    let [username , setUserName] = useState('')
    let [email , setEmail] = useState('')
    let [password , setPassword] = useState('')
    let [confirmPassword , setConfirmPassword] = useState('')

    const handleSignUp = () =>{
       
        navigation.navigate('EmailVerification')
    }


    return (
        <View style={styles.registerPage} >
            <Headline style={styles.header} >Welcome</Headline>
            <Text style={styles.header} >To begin, sign up with an option below</Text>
            <View style={{alignItems:'center'}}  >
                <TextInput label='Username' mode='outlined' style={styles.input} value={username} onChangeText={(text) => setUserName(text) } left={<TextInput.Icon name='account-circle-outline' />} />
                <TextInput label='Email' mode='outlined' style={styles.input} value={email} onChangeText={(text) => setEmail(text) } left={<TextInput.Icon name='email-outline' />} />
                <TextInput label='Password' mode='outlined' style={styles.input} secureTextEntry value={password} onChangeText={(text) => setPassword(text)} left={<TextInput.Icon name='lock-outline' />} />
                <TextInput label='Re-enter Password' mode='outlined' style={styles.input} secureTextEntry value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} left={<TextInput.Icon name='lock-outline' />} />
                <Button mode='contained' onPress={handleSignUp} style={styles.loginBtn} >Sign Up</Button>
            </View>
            
            <View style={styles.orSection} >
                <View style={styles.hr} ></View>
                <Text style={{color:'black'}} > OR </Text>
                <View style={styles.hr} ></View>
            </View>
            <View style={styles.socialBtns} >
                <Button icon="google"  mode='contained' onPress={() => console.log('pressed')} style={styles.loginBtn} color='red' >Sign Up With Google</Button>
                <Button icon="facebook" mode='contained' onPress={() => console.log('pressed')} style={styles.loginBtn} color='blue'>Sign Up With Facebook</Button>
            </View>
            <Text
                style={{color:'blue'}}
                onPress={() => navigation.navigate('Login')}
            >
                Already a member? Log In
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    registerPage:{
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

export default Register
