import React,{useState,useEffect} from 'react'
import {ScrollView,Text,StyleSheet,View} from 'react-native';
import {Button,Heading} from 'native-base'
import AuctionCard from '../Components/Cards/AuctionCard';
import axios from 'axios';
import { Root } from '../Config/root';
import { useSelector } from 'react-redux';
const MyAuctions = () => {

    var user=useSelector(state=>state.user);
    const [auctions,setAuctions] = useState([]);
    const [error,setError] = useState('')
    const [errorShow,setErrorShow] = useState(false)


    useEffect(()=>{
        const fetching=async()=>{
            
            try{
            var {data} =  await axios.post(`${Root.production}/auction/getAuctionByUser`,{
                accountId : '61672572bf29bb77c5c9403b'
            })
            if(data.status==200){
                setAuctions(data.message)
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
        fetching();
    },[])

    return (
        <View>
            
            <Text style={styles.heading}>My Auctions</Text>
   
      <ScrollView>
          {auctions &&
          auctions.reverse().map((v,i)=>{
              return(
                  <AuctionCard path="AuctionDetails" data={v}/>
                  )
          })}
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


export default MyAuctions
