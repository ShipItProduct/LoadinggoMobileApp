import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Headline, TextInput, Button, Checkbox } from 'react-native-paper'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FeatherIcon from 'react-native-vector-icons/dist/Feather'
import PhoneInput from "react-native-phone-number-input";
import * as ImagePicker from 'react-native-image-picker'

const BuildProfile = ({navigation}) => {

    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [gender, setGender] = React.useState("Male");
    let [dob, setDob] = useState('')
    let [town, setTown] = useState('')
    let [street, setStreet] = useState('')
    let [city, setCity] = useState('')
    let [province, setProvince] = useState('')
    let [phone, setPhone] = useState('')
    let [cnic, setCNIC] = useState('')
    let [photo, setPhoto] = useState(null)
    let [photoName, setPhotoName] = useState('')

    let [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleGenderSelect = () => {
        if (gender === "Male") {
            setGender("Female")
        }
        else {
            setGender("Male")
        }
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDob(date)
        hideDatePicker();
    };

    const handleProfileSubmit = () => {
        console.log('=>',photo,'<==<')
        console.log({
            firstName,
            lastName,
            gender,
            dob,
            town,
            street,
            city,
            province,
            phone,
            cnic
        });


        navigation.navigate('dashboard-app')
    }


    return (
        <ScrollView>
            <View
                style={styles.buildProfilePage}
            >
                <Headline>Create A Profile</Headline>
                <Text>Make sure it's catchy</Text>
                <View style={styles.inputSection} >
                    <View
                        style={styles.oneLiner}
                    >
                        <TextInput label='First Name' style={styles.halfInput} mode='outlined' value={firstName} onChangeText={(text) => setFirstName(text)} />
                        <TextInput label='Last Name' style={styles.halfInput} mode='outlined' value={lastName} onChangeText={(text) => setLastName(text)} />
                    </View>
                    <View style={styles.checkboxOneLiner} >
                        <Text style={{ color: "black" }} >Gender:</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <Text>Male</Text>
                            <Checkbox
                                color='#1a2387'
                                status={gender === "Male" ? 'checked' : 'unchecked'}
                                onPress={handleGenderSelect}
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <Text>Female</Text>
                            <Checkbox
                                color='#1a2387'
                                status={gender === "Female" ? 'checked' : 'unchecked'}
                                onPress={handleGenderSelect}
                            />
                        </View>
                    </View>
                    <View style={styles.searchSection} >
                        <TouchableOpacity onPress={showDatePicker} style={{ flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-between' }} >
                            <Text>{dob ? (`${dob}`) : ('Date Of Birth')}</Text>
                            <FeatherIcon name='calendar' size={20} color="#000" />
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <TextInput label='Town' style={styles.fullInput} mode='outlined' value={town} onChangeText={(text) => setTown(text)} />
                    <TextInput label='Street' style={styles.fullInput} mode='outlined' value={street} onChangeText={(text) => setStreet(text)} />
                    <TextInput label='City' style={styles.fullInput} mode='outlined' value={city} onChangeText={(text) => setCity(text)} />
                    <TextInput label='Province' style={styles.fullInput} mode='outlined' value={province} onChangeText={(text) => setProvince(text)} />
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 2,
                        height: 75,
                        width: 310,
                        marginBottom: 5,
                        marginTop: 5,
                        marginLeft: 5,
                    }} >
                        <PhoneInput
                            defaultValue={phone}
                            defaultCode="PK"
                            textInputStyle={{color:'black'}}
                            onChangeText={(text) => {
                                setPhone(text);
                            }}
                        />
                    </View>
                    <TextInput label='CNIC' style={styles.fullInput} mode='outlined' value={cnic} onChangeText={(text) => setCNIC(text)} />
                    <View style={styles.uploadSection}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                        <Text>Profile Picture</Text>
                        <TouchableOpacity onPress={() => {
                            ImagePicker.launchImageLibrary(
                                {
                                    mediaType: 'photo',
                                    includeBase64: false,
                                    maxHeight: 200,
                                    maxWidth: 200,
                                },
                                (response) => {
                                    setPhoto(response.assets[0].uri)
                                    setPhotoName(response.assets[0].fileName)
                                },
                            )
                        }} >
                            <FeatherIcon style={styles.searchIcon} name='upload' size={20} color='#000' />
                        </TouchableOpacity>
                       
                        </View>
                        <View>
                        <Text>{photo === '' ? '' : photoName}</Text>
                        </View>
                    </View>
                    <Button mode='contained' style={styles.submitBtn} onPress={handleProfileSubmit} >Submit</Button>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buildProfilePage: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    header: {
        color: 'black',
    },
    inputSection: {
        justifyContent: 'center'
    },
    oneLiner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkboxOneLiner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 310,
        marginLeft: 5,
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: '#F8F9FB',
        height: 50,
        marginBottom: 10,
        marginTop: 10,
        padding: 5
    },
    fullInput: {
        width: 310,
        margin: 5
    },
    halfInput: {
        width: 150,
        margin: 5
    },
    submitBtn: {
        width: 300,
        margin: 10,
        
    },
    searchSection: {
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: '#F8F9FB',
        width: 310,
        marginLeft: 5,
        padding: 5,
    },
    uploadSection: {
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: '#F8F9FB',
        width: 310,
        marginLeft: 5,
        padding: 5,
        flexDirection:'column',
        justifyContent:'space-between'
    }
})

export default BuildProfile
