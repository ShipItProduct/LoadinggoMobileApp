import React,{useState,useEffect} from 'react'
import {ScrollView,StyleSheet,View} from 'react-native';
import {Button,Flex,HStack,VStack,Select,CheckIcon,Text} from 'native-base'
import Shipment from '../Components/Cards/Shipment';
import { Cities } from '../Components/Cities/Cities';
import axios from 'axios';
import {Root} from '../Config/root';

const MyShipments = () => {

const [showFilter,setShowFilter] = useState(false);
const [from,setFrom] = useState('');
const [to,setTo] = useState('');
var [shipments,setShipments] = useState([]);
const [myAllShipments,setMyAllShipments] = useState([]);
const [error,setError] = useState('')
const [errorShow,setErrorShow] = useState(false)


useEffect(()=>{
fetching();
},[])

const fetching=async()=>{
  try{
    var {data} =  await axios.post(`${Root.production}/trip/getShipmentOfferByUser`,{
        accountId : '61672572bf29bb77c5c9403b'
    })
    if(data.status==200){
        setShipments(data.message)
        setMyAllShipments(data.message)
    }
    else{
        setError(data.message)
        setErrorShow(true)
    }
}
catch(err){
setError(err.message)
setErrorShow(true)
}

}

const handleDataFilter = (type)=>{
    if(type!='All'){
  // start of all checking
  
    shipments = [];
    //   filter= type;
//   setFilter(filter);
  shipments.push(
    myAllShipments.filter((val) => {
      var check = val.status == type;
      if (check) {
        return val;
      }
    })
  );
  shipments = shipments[0];
  setShipments(shipments);
  
  
  }
  // end of all checking
  else{
    shipments=myAllShipments;
    setShipments(shipments)
  }
    }
  

    const filterData = () => {
        shipments = [];
        if (from !== "" && to === "") {
          // PUSH METHOD FOR FILTER FROM
          shipments.push(
            myAllShipments.filter((val) => {
              var check = val.pickupCity == from;
              if (check) {
                return val;
              }
            })
          );
          // END OF PUSH METHOD
          shipments = shipments[0];
          setShipments(shipments);
        }
    
        if (to !== "" && from === "") {
          // PUSH METHOD FOR FILTER TO
          shipments.push(
            myAllShipments.filter((val) => {
              var gotit = val.destinationCity == to;
              if (gotit) {
                return val;
              }
            })
          );
          // END OF PUSH METHOD
          shipments = shipments[0];
          setShipments(shipments);
        }
    
        if (to === "" && from === "") {
          shipments = myAllShipments;
          setShipments(shipments);
        }
        if (from !== "" && to !== "") {
          // PUSH METHOD FOR FILTER TO
          shipments.push(
            myAllShipments.filter((val) => {
              var gotit = val.destinationCity === to && val.pickupCity === from;
              if (gotit) {
                return val;
              }
            })
          );
          // END OF PUSH METHOD
          shipments = shipments[0];
          setShipments(shipments);
        }
      };
    


const toggleFilter =()=>{
        setShowFilter(!showFilter)
}

const handleChange=(city,type)=>{
    if(type==='to'){
        setTo(city)
    }else if(type==='from'){
        setFrom(city)
    }
}

    return (
        <View>
            <Text style={styles.heading}>My Shipments</Text>
                <Flex ml={250} mr={10}>
            <Button onPressIn={toggleFilter}>
                Filter                
            </Button>
            </Flex>
            {
                showFilter==true &&
            <Flex style={{backgroundColor:'lightgray',borderRadius:5}} h={55} mt={2} w={"80%"} ml={"10%"}>
                <HStack>
                    <VStack style={{width:'40%'}}>
                        <Text pl={2} mb={-3} mt={1}>From :</Text>
                        <View style={{maxWidth:'90%'}}>
                        <Select
            selectedValue={from}
        accessibilityLabel="From"
        variant="underlined"
        placeholder="From"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => handleChange(itemValue,'from')}
      >
          {
              Cities.map((v,i)=>(
                  <Select.Item key={i}  label={v} value={v} />
              ))
          }
      </Select>
      </View>

                        </VStack>
                    <VStack style={{width:'40%'}}>
                        <Text pl={2} mb={-3} mt={1}>To :</Text>
                        <View style={{maxWidth:'90%'}}>
                        <Select
            selectedValue={to}
        accessibilityLabel="To"
        variant="underlined"
        placeholder="To"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => handleChange(itemValue,'to')}
      >
          {
              Cities.map((v,i)=>(
                  <Select.Item key={i}  label={v} value={v} />
              ))
          }
      </Select>
      </View>
                        </VStack>
                    <VStack style={{width:'20%'}}>
                        <Button onPress={filterData} variant='subtle' bgColor='white' size="xs" mt={3} mr={1}>Search</Button>
                        </VStack>
                </HStack>
            </Flex>
            }
            <Button.Group
            style={styles.btn_group}
      colorScheme="blue"
      mx={{
        base: "auto",
        md: 0,
      }}
    >
      <Button onPress={()=>handleDataFilter('All')} size="xs" style={styles.button1}>All</Button>
      <Button onPress={()=>handleDataFilter('Active')} size="xs" style={styles.button}>Active</Button>
      <Button onPress={()=>handleDataFilter('Pending')} size="xs" style={styles.button}>Pending</Button>
      <Button onPress={()=>handleDataFilter('Completed')} size="xs" style={styles.button}>Completed</Button>
      <Button onPress={()=>handleDataFilter('Cancel')} size="xs" style={styles.button}>Cancelled</Button>
    </Button.Group>
      <ScrollView style={{marginBottom:170}}>
          {
            shipments &&
            shipments.reverse().map((v,i)=>{
                return(
                    <Shipment path="shipmentDetails" data={v}/>
                )
            })  
          }
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        paddingTop:20,
        paddingLeft:20,
        color:'black',
        fontWeight:'bold'
    },
    button1:{
        width:70,
        height:40,
    },
    button:{
        width:70,
        height:40,
        marginLeft:-12
    },
    btn_group:{
        marginTop:20,
        marginBottom:20
    }
})


export default MyShipments
