import React, { useState } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { Button, Headline , TextInput} from 'react-native-paper'
import {GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';
import {LoginButton, AccessToken } from 'react-native-fbsdk';
import {Root} from '../Config/root'
import {Heading} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const Register = ({navigation}) => {

    let [username , setUserName] = useState('')
    let [email , setEmail] = useState('')
    let [password , setPassword] = useState('')
    let [confirmPassword , setConfirmPassword] = useState('')
    let [error,setError] = useState('');
    let [errorShow,setErrorShow] = useState(false);
    const [disabled , setDisabled] = useState(false)

    const handleSignUp =async () =>{
      setDisabled(true)
      setErrorShow(false);
        try {
          if(username==='' || email=== '' || password ===''){
              setErrorShow(true);
              setError('Please fill form completely.')
          }
          else if(password !==confirmPassword){
              setErrorShow(true);
              setError('Your Password & Confirm Password should be same.')
          }else{
            let {data} = await axios.post(`${Root.production}/user/register` , {email , password,username})
            if(data.status==200){
              navigation.navigate('BuildProfile',{id:data.message.id})
            }else if(data.status==409){
              setError(data.mesaage)
              setErrorShow(true);
            }
            else{
              setError(data.message)
              setErrorShow(true);
            }
          } 
        }
        catch (error) {
          setError(error.message)
          setErrorShow(true);
        }

      setDisabled(false)
    }

    GoogleSignin.configure({
      webClientId: '780700793736-oudg9cns1jn3foim60bg54aefabrla89.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // accountName: 'Loadinggo', // [Android] specifies an account name on the device that should be used
      // androidClientId:'1080341009220-eejsurl9tu4bhm6vr40jsp2pcg09ljdc.apps.googleusercontent.com'
  });

      const signUpWithGoogle = async () => {
        setErrorShow(false);
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
        const {data} = await axios.post(`${Root.production}/user/register` , {email:userInfo.user.email , 
          password:userInfo.user.id,username:userInfo.user.name})
        if(data.status==200){
          navigation.navigate('BuildProfile',{id:data.message.id})
        }else if(data.status==409){
          setError(data.mesaage)
          setErrorShow(true);
        }
        else{
          setError(data.message)
          setErrorShow(true);
        }

        } catch (error) {
            console.log(error.message)
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        console.log('cancel')
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        console.log('in progress')
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('not available')

            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };
  

    return (
        <View style={styles.registerPage} >
            <Headline style={styles.header} >Welcome</Headline>
            <Text style={styles.header} >To begin, sign up with an option below</Text>
            {
              errorShow &&
              <View style={{backgroundColor:'#FDEDED',paddingHorizontal:10,paddingVertical:5,borderRadius:5,width:'80%'}}>
                <Heading size="sm" style={{borderRadius:4,padding:5,color:'#5F2120'}}>
                    <MaterialIcons name="error" size={20} color="#F0625F"/>
                    Registration Error
                </Heading>
                 <Text style={{padding:5,color:'#5F2120',marginLeft:40}}>
                    {error}
                </Text>
              </View>
            }

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
            <GoogleSigninButton
  style={{ width: 250, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Light}
  onPress={()=>signUpWithGoogle()}
  //   disabled={this.state.isSigninInProgress}
/>   
<LoginButton
            style={{width:250,height:35,backgroundColor:"blue"}}
              onLoginFinished={
                (error, result) => {
                  console.log('start')
    
                  if (error) {
                    console.log("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    console.log("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log('ho gya')
                        // console.log(data.accessToken.toString())
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => console.log("logout.")}/>
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
