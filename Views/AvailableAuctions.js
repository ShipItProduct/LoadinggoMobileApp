import React,{useEffect,useState} from 'react'
import {ScrollView,StyleSheet,View} from 'react-native';
import AuctionCard from '../Components/Cards/AuctionCard';
import axios from 'axios';
import { Cities } from '../Components/Cities/Cities';
import {Button,Flex,HStack,VStack,Select,CheckIcon} from 'native-base'
import { Root } from '../Config/root';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text,Heading} from 'native-base'
import {useDispatch,useSelector} from 'react-redux';
import {setUpdation} from './../Store/action';


const AvailableAuctions = () => {

    const [showFilter,setShowFilter] = useState(false);
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    let [allAuctions,setAllAuctions] = useState([]);
    let [auctions,setAuctions] = useState([]);
    let [error,setError] = useState('');
    let [errorShow,setErrorShow] = useState(false);
    const user = useSelector(state=>state.user);
    const updation = useSelector(state=>state.updation)
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
      dispatch(setUpdation())
    },[])
    
    useEffect(()=>{
        fectching();
        handleDataFilter('All')
    },[updation])

    const fectching=async()=>{
      setErrorShow(false)
        try{
        var {data} = await axios.get(`${Root.production}/auction/getAllAuctions`);
        if(data.status===200){
          allAuctions=data.message.auctions
          auctions=data.message.auctions
            setAllAuctions(data.message.auctions);
            setAuctions(data.message.auctions)
        }else{
      setErrorShow(false)
      setError(data.message)
        }
    }
    catch(err){
      setErrorShow(false)
      setError(err.message)

    }
    }
    const handleDataFilter = async(val)=>{
        if(val=='All'){
      // // start of all checking
      auctions = [];
      auctions.push(
        allAuctions.filter((val) => {
          var check = (val.status=='Open')
        // var check=true
        //   var check = (val.status == 'Open' && val.accountId != user.account._id);
          if (check) {
            return val;
          }
        })
      );
      setAuctions(auctions[0]);
      }
      else if(val=='Pending'){
      auctions = [];
      auctions.push(
        allAuctions.filter((val) => {
          // var check = val.status=='On Hold'
          var check = (val.status === 'On Hold' && val.choosenCarrierId == user?.account?._id);
          if (check) {
            return val;
          }
        })
      );  
      setAuctions(auctions[0]);
      }
      // // end of all checking
      // else{
      //   allAuctions=myAllShipments;
      //   setallAuctions(allAuctions)
      // }
    
        }   
    
        const filterData = () => {
            auctions = [];
            if (from !== "" && to === "") {
              // PUSH METHOD FOR FILTER FROM
              auctions.push(
                allAuctions.filter((val) => {
                  var check = val.pickupCity == from;
                  if (check) {
                    return val;
                  }
                })
              );
              // END OF PUSH METHOD
              auctions = auctions[0];
              setAuctions(auctions);
            }
        
            if (to !== "" && from === "") {
              // PUSH METHOD FOR FILTER TO
              auctions.push(
                allAuctions.filter((val) => {
                  var gotit = val.destinationCity == to;
                  if (gotit) {
                    return val;
                  }
                })
              );
              // END OF PUSH METHOD
              auctions = auctions[0];
              setAuctions(auctions);
            }
        
            if (to === "" && from === "") {
              setAuctions(allAuctions);
            }
            if (from !== "" && to !== "") {
              // PUSH METHOD FOR FILTER TO
              auctions.push(
                allAuctions.filter((val) => {
                  var gotit = val.destinationCity === to && val.pickupCity === from;
                  if (gotit) {
                    return val;
                  }
                })
              );
              // END OF PUSH METHOD
              auctions = auctions[0];
              setAuctions(auctions);
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
            <Text style={styles.heading}>Available Auctions</Text>
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
      <Button onPress={()=>handleDataFilter('Pending')} size="xs" style={styles.button}>Pending</Button>
    </Button.Group>
    {
              errorShow &&
              <View style={{backgroundColor:'#FDEDED',paddingHorizontal:10,paddingVertical:5,borderRadius:5,marginLeft:'10%',width:'80%'}}>
                <Heading size="sm" style={{borderRadius:4,padding:5,color:'#5F2120',marginLeft:10}}>
                    <MaterialIcons name="error" size={20} color="#F0625F"/>
                    Fetching Error
                </Heading>
                 <Text style={{padding:5,color:'#5F2120',marginLeft:40}}>
                    {error}
                </Text>
              </View>
            }
      <ScrollView style={{marginBottom:170}}>
      {auctions.map((val,i) => (
            <View key={i}>
              <AuctionCard route="CarrierAuctionDetails" data={val}/>
            </View>
            )
        )}
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
        width:80,
        height:40,
        marginLeft:-12
    },
    btn_group:{
        marginTop:20,
        marginBottom:20
    }
})


export default AvailableAuctions
