import React, { useState } from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { Button, Headline , TextInput , Modal , ActivityIndicator , Colors } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import {root} from '../Config/root'
import {GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';
import {LoginButton, AccessToken } from 'react-native-fbsdk';

const Login = ({navigation}) => {

    let [email , setEmail] = useState('')
    let [password , setPassword] = useState('')

    const [disabled , setDisabled] = useState(false)

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
        webClientId: '691558783259-segcfdciideiapg249ad84lholp7sila.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: 'Loadinggo', // [Android] specifies an account name on the device that should be used
        androidClientId:'1080341009220-eejsurl9tu4bhm6vr40jsp2pcg09ljdc.apps.googleusercontent.com'
    });

      const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          const currentUser = await GoogleSignin.getCurrentUser();
        //   setState({ userInfo });
        console.log(userInfo,'==>>',currentUser)
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
            <GoogleSigninButton
  style={{ width: 250, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Light}
  onPress={()=>signIn()}
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
