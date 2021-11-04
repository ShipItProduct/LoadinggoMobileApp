import React, { useState } from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { Headline , TextInput, Button} from 'react-native-paper'

const EnterEmailForForgetPassword = ({navigation}) => {

    let [email , setEmail] = useState('')


    const handleEmailSubmit = () =>{
        navigation.navigate('ResetPassword')
    }

    return (
        <View style={styles.emailVerificationForForgetPasswordPage} >
            <Headline>Enter your email address</Headline>
            <Text>We need to verify that this is really you.</Text>
            <View style={{alignItems:'center'}}  >
                <TextInput label='Email' mode='outlined' style={styles.input} value={email} onChangeText={(text) => setEmail(text) } left={<TextInput.Icon name='account-circle-outline' />} />
                <Button mode='contained'  style={styles.submitBtn} onPress={handleEmailSubmit} >Sign Up</Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    emailVerificationForForgetPasswordPage:{
        alignItems:'center',
        backgroundColor:'white',
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    },
    para:{
        width:250,
        textAlign:'center'
    },
    submitBtn:{
        width:300,
        margin:5
    },
    input:{
        width:300,
        margin:5
    },
})

export default EnterEmailForForgetPassword
