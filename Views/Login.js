import React, { useState ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Heading} from 'native-base';
import {  StyleSheet, Text, View } from 'react-native'
import { Button, Headline , TextInput , Modal , ActivityIndicator , Colors } from 'react-native-paper'
import axios from 'axios'
import {Root} from '../Config/root'
import {setUserData} from '../Store/action';
import {GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';
import {LoginButton, AccessToken } from 'react-native-fbsdk';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}) => {

    const dispatch =useDispatch();
    let [email , setEmail] = useState('bot2@gmail.com')
    let [password , setPassword] = useState('shipitbot2')
    let [error,setError] = useState('');
    let [errorShow,setErrorShow] = useState(false);
    const [disabled , setDisabled] = useState(false)

    GoogleSignin.configure({
      webClientId: '780700793736-oudg9cns1jn3foim60bg54aefabrla89.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // webClientId: '1080341009220-c07eicflj0i50hspov11nu00cprbu6pr.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess:true
      // accountName: 'Loadinggo', // [Android] specifies an account name on the device that should be used
        // androidClientId:'1080341009220-eejsurl9tu4bhm6vr40jsp2pcg09ljdc.apps.googleusercontent.com'
    });

      const signIn = async () => {
        setErrorShow(false);
        setDisabled(true)
        try {
          const a=await GoogleSignin.hasPlayServices();
          // console.log('ues==>',a)
          const userInfo = await GoogleSignin.signIn();
        //   setState({ userInfo });
        // console.log('as==>>',userInfo.user.name)
        // console.log('as==>>',userInfo.user.email)
        // console.log('as==>>',userInfo.user.id)
        const {data} = await axios.post(`${Root.production}/user/login` , {email: userInfo.user.email , password:userInfo.user.id})
        if(data.status==200){
          if (data.message.account.verified == true) {
            dispatch(setUserData(data.message))
            navigation.navigate('dashboard-app')
            setPassword('')
          }
          else{
            navigation.navigate(`EmailVerification`,{
              id:data.message.account._id
            });
          }
        } else if (data.status == 403) {
          navigation.navigate('BuildProfile',{
            id:data.message.userId
          })
        } else{
          setError(data.message)
          setErrorShow(true);
        }

      } 
        catch (error) {
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
      setDisabled(false)
      };

    const handleLogin = async () =>{
      if(email!=='' || password!==''){
      setDisabled(true)
      setErrorShow(false);
        try {
            // setDisabled(true)
            const {data} = await axios.post(`${Root.production}/user/login` , {email: email , password:password})
            if(data.status==200){
              if (data.message.account.verified == true) {
                dispatch(setUserData(data.message))
                navigation.navigate('dashboard-app')
                setPassword('')
              }
              else{
                navigation.navigate(`EmailVerification`,{
                  id:data.message.account._id
                });
              }
            } else if (data.status == 403) {
              // console.log(data.userId)
              navigation.navigate('BuildProfile',{
                id:data.userId
              })
            } else{
              setError(data.message)
              setErrorShow(true);
            }

            // setDisabled(false)
        } catch (error) {
          setError(error.message)
          setErrorShow(true);
        }
      setDisabled(false)
    }
    else{
      
    }
    }



    return (
        <View style={styles.loginPage} >
            <Headline style={styles.header} >Welcome Back</Headline>
            <Text style={styles.header} >Please Log In To Continue</Text>
            {
              errorShow &&
              <View style={{backgroundColor:'#FDEDED',paddingHorizontal:10,paddingVertical:5,borderRadius:5,width:'80%'}}>
                <Heading size="sm" style={{borderRadius:4,padding:5,color:'#5F2120'}}>
                    <MaterialIcons name="error" size={20} color="#F0625F"/>
                    Login Error
                </Heading>
                 <Text style={{padding:5,color:'#5F2120',marginLeft:40}}>
                    {error}
                </Text>
              </View>
            }

            <View style={{alignItems:'center'}}  >
                <TextInput label='Email' mode='outlined' style={styles.input} value={email} onChangeText={(text) => setEmail(text) } left={<TextInput.Icon name='email-outline' />}  />
                <TextInput label='Password'  mode='outlined' style={styles.input} secureTextEntry value={password} onChangeText={(text) => setPassword(text)} left={<TextInput.Icon name='lock-outline' />} />
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
                    // publishPermissions={['publish_actions']}
            style={{width:250,height:35,backgroundColor:"blue"}}
              onLoginFinished={
                (error, result) => {
                  console.log('start')
                  console.log(JSON.stringify(AccessToken.getCurrentAccessToken()))
                  if (error) {
                    console.log("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    console.log("login is cancelled." + JSON.stringify(result));
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
