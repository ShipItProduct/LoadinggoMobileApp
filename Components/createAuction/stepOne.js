
import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Cities,ShipmentTypes} from './../Cities/Cities';
import { HStack,VStack ,Center,Heading,Input,Select,CheckIcon,Radio} from 'native-base';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from 'react-native-gesture-handler';

const StepOne = () => {

    const [pickupCity,setPickupCity]=useState('')
    const [dropOffCity,setDropOffCity]=useState('')
    let [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    let [pickUpDate, setPickUpDate] = useState('')
    let [dropOffDate, setDropOffDate] = useState('')
    let [dateType, setDateType] = useState('')
    let [isTimePickerVisible, setTimePickerVisibility] = useState(false)
    let [pickUpTime, setPickUpTime] = useState('')
    let [dropOffTime, setDropOffTime] = useState('')

    const showDatePicker = (type) => {
        setDateType(type)
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        if(dateType==='pickup'){
            setPickUpDate(date)
        }else if(dateType==='dropoff'){
            setDropOffDate(date)
        }
        hideDatePicker();
    };
    

    const showTimePicker = (type) => {
        setDateType(type)
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        if(dateType==='pickup'){
            setPickUpTime(time)
        }else if(dateType==='dropoff'){
            setDropOffTime(time)
        }
        hideTimePicker();
    };
    
    return (
        <ScrollView>
                <VStack style={styles.vStack}>
                        <Heading size="md" mt={7}>Pickup Details</Heading>
                        <Heading size="xs" mt={2}>PickUp Date:</Heading>
                        <TouchableOpacity onPress={()=>showDatePicker('pickup')} style={{ flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-between' }} >
                            <Text>{pickUpDate ? (`${pickUpDate}`) : 'Select'}</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <Heading size="xs" mt={2}>PickUp Time:</Heading>
                        <TouchableOpacity onPress={()=>showTimePicker('pickup')} style={{ flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-between' }} >
                            <Text>{pickUpTime ? (`${pickUpTime}`) : 'Select'}</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="time"
                            onConfirm={handleTimeConfirm}
                            onCancel={hideTimePicker}
                        />                        
                        <Input style={styles.Input} variant="underlined" placeholder="PickUp Address" />
                        <View style={{maxWidth:'90%'}}>
                        <Select
            selectedValue={pickupCity}
        accessibilityLabel="PickUp City"
        variant="underlined"
        placeholder="PickUp City"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setPickupCity(itemValue)}
      >
          {
              Cities.map((v,i)=>(
                  <Select.Item key={i}  label={v} value={v} />
              ))
          }
      </Select>
      </View>
                    <Heading size="md" mt={7}>DropOff Details</Heading>
                    <Heading size="xs" mt={2}>DropOff Date:</Heading>
                    <TouchableOpacity onPress={()=>showDatePicker('dropoff')} style={{ flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-between' }} >
                            <Text>{dropOffDate ? (`${dropOffDate}`) : 'Select'}</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <Heading size="xs" mt={2}>DropOff Time:</Heading>
                        <TouchableOpacity onPress={()=>showTimePicker('dropoff')} style={{ flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-between' }} >
                            <Text>{dropOffTime ? (`${dropOffTime}`) : 'Select'}</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="time"
                            onConfirm={handleTimeConfirm}
                            onCancel={hideTimePicker}
                        />        
                    <Input style={styles.Input} variant="underlined" placeholder="DropOff Address" />
                    <Input style={styles.Input} variant="underlined" placeholder="DropOff Contact Name" />
                    <Input style={styles.Input} variant="underlined" placeholder="DropOff Contact Number" />
                    <View style={{maxWidth:'90%'}}>
                        <Select
            selectedValue={dropOffCity}
        accessibilityLabel="DropOff City"
        variant="underlined"
        placeholder="DropOff City"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setDropOffCity(itemValue)}
      >
          {
              Cities.map((v,i)=>(
                  <Select.Item key={i}  label={v} value={v} />
              ))
          }
      </Select>
      </View>
                </VStack>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    vStack:{
        marginLeft:'10%'
    },
        Input:{
            fontSize:13,
            paddingTop:15,
            width:'90%'
        },
    })

export default StepOne
