import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {Cities,ShipmentTypes} from './../Components/Cities/Cities';
import { HStack,VStack ,Center,Heading,Input,Select,CheckIcon,Radio} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { Root } from '../Config/root';

const CreateRequestForm = () => {

    const [pickupAddress,setPickupAddress]=useState('')
    const [pickupCity,setPickupCity]=useState('')
    const [dropoffContactName,setDropoffContactName]=useState('')
    const [dropoffContactNumber,setDropoffContactNumber]=useState('')
    const [dropoffAddress,setDropoffAddress]=useState('')
    const [dropoffCity,setDropoffCity]=useState('')
    const [height,setHeight]=useState('')
    const [width,setWidth]=useState('')
    const [weight,setWeight]=useState('')
    const [fragile,setFragile]=useState()
    const [shipmentType,setShipmentType]=useState('')
    const [shipmentValue,setShipmentValue]=useState(0)


    return (
        <ScrollView>
                <VStack style={styles.vStack}>
                        <Heading size="md" mt={7}>Pickup Details</Heading>
                        <Input style={styles.Input} variant="underlined" placeholder="PickUp Address" 
                        value={pickupAddress} onChange={txt=>setPickupAddress(txt)}
                        />
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
                    <Input style={styles.Input} variant="underlined" placeholder="DropOff Address"
            value={dropoffAddress} onChange={txt=>setDropoffAddress(txt)}
                    />
                    <Input style={styles.Input} variant="underlined" placeholder="DropOff Contact Name"
            value={dropoffContactName} onChange={txt=>setDropoffContactName(txt)}
            />
                    <Input style={styles.Input} variant="underlined" placeholder="DropOff Contact Number" 
            value={dropoffContactNumber} onChange={txt=>setDropoffContactNumber(txt)}
            />
                    <View style={{maxWidth:'90%'}}>
                    <Select
            selectedValue={dropoffCity}
        variant="underlined"
        accessibilityLabel="DropOff City"
        placeholder="DropOff City"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setDropoffCity(itemValue)}
      >
          {
              Cities.map((v,i)=>(
                  <Select.Item key={i}  label={v} value={v} />
              ))
          }
      </Select>
      </View>
                </VStack>
                <VStack style={styles.vStack}>
                    <Heading size="md" mt={7}>Shipment Details</Heading>
                    <Heading size="xs" mt={3}>Shipment Size:</Heading>
                    <Input style={styles.Input} variant="underlined" placeholder="Height (cm)" 
            value={height} onChange={txt=>setHeight(txt)}
            />
                    <Input style={styles.Input} variant="underlined" placeholder="Width (cm)"
            value={width} onChange={txt=>setWidth(txt)}
            />
                    <Heading size="xs" mt={5}>Shipment Weight:</Heading>
                    <Input style={styles.Input} variant="underlined" placeholder="Weight (kg)"
            value={weight} onChange={txt=>setWeight(txt)}
            />
                    <Heading size="xs" mt={5}>Fragile:</Heading>
                    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={fragile}
      onChange={(nextValue) => {
        setFragile(nextValue)
      }}
    >
        <HStack>
      <Radio value="Yes" mt={1} mr={2}>
        Yes
      </Radio>
      <Radio value="No" mt={1}>
        No
      </Radio>
      </HStack>
    </Radio.Group>
                    <Heading size="xs" mt={5}>What best describe your shipment:</Heading>
                    <View
                    style={{width:'90%'}}
                    >
                    <Select
            selectedValue={shipmentType}
        variant="underlined"
        accessibilityLabel="Shipemnt Type"
        placeholder="Shipemnt Type"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setShipmentType(itemValue)}
      >
          {
              ShipmentTypes.map((v,i)=>(
                  <Select.Item key={i}  label={v} value={v} />
              ))
          }
      </Select>
      </View>
      <Input style={styles.Input} variant="underlined" placeholder="Total Value of shipment" 
            value={shipmentValue} onChange={txt=>setShipmentValue(txt)}
            />
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

export default CreateRequestForm
