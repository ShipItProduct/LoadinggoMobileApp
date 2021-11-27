import React,{useEffect,useState} from 'react'
import {ScrollView,StyleSheet,View} from 'react-native';
import StatusBadge from '../Components/StatusBadges/StatusBadge'
import { AlertDialog,Center,Heading,Text,Container,Button ,Stack,Modal,VStack,HStack,Image,Checkbox} from 'native-base';
import StarRating from 'react-native-star-rating';
import { Root } from '../Config/root';
import axios from 'axios';
// import { Button } from 'react-native-paper';

const shipmentDetails = ({route,navigation}) => {

    var {id} = route.params;
    var [shipment,setShipment] = useState({});
    const [error,setError] = useState('')
    const [alertBody,setAlertBody] = useState('')
    const [errorShow,setErrorShow] = useState(false)
    const [check,setCheck] = useState(false)
    const [loading,setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const [showModal4, setShowModal4] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [rating, setRating] = useState(2.5)
  
    const onClose = () => setIsOpen(false)

    useEffect(async()=>{
      fetching();
    },[])

    const fetching=async()=>{
      try{
          console.log('id==>',id)
      var {data} =  await axios.post(`${Root.production}/trip/viewShipmentOfferDetails`,{
          shipmentOfferId : id
      })
      if(data.status==200){
          shipment=data.message
          setShipment(data.message)
          setLoading(false)
          console.log('shipments==>',shipment)
      }
      else{
          setError(data.message)
          setErrorShow(true)
          console.log('error==>',data.message)
      }
  }
  catch(err){
  setError(err.message)
  setErrorShow(true)
  console.log('error==>,',err.message)
  }
    }


    const handleTermsConditions = async() => {
        // api will be called
        var {data} = await axios.post(`${Root.production}/trip/verifyShipment`,{
          shipmentOfferId:shipment.shipmentOffer._id
        })
        if(data.status==200){
            setShowModal2(false);
            setShowModal(false);
            setAlertBody('Pickup confirmed');
            setIsOpen(true)
      }
      };

      const handleConfirmDropoff = async() => {

        var {data} = await axios.post(`${Root.production}/trip/confirmDropOff`,{
          shipmentOfferId : shipment.shipmentOffer._id
        })
        if(data.status==200){
          setShowModal3(false);
          setShowModal4(true)
          setAlertBody('Your shipment has been confirmed as delivered.')
          setIsOpen(true)
        }
      };
    
      const handleRating = async() => {

        var {data} = await axios.post(`${Root.production}/trip/giveRating`,{
          rating:rating,
          accountId:shipment.shipmentOffer.carrierId
        })
        if(data.status==200){
          alert(feedback);
          setAlertBody('Thanks for your feedback.')
          setIsOpen(true)
          setShowModal4(false);
        }
      };

      const handleAlertClose = ()=>{
          navigation.navigate('my-shipments',{id:shipment.shipmentOffer.accountId})
      }

    return (
        <ScrollView style={styles.parent}>

<AlertDialog
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.Body>
              <Center>
            {alertBody}
              <Button colorScheme="success" onPress={handleAlertClose}>
                Close
              </Button>
              </Center>
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>

                  <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                  <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Confirm Pickup</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Verify Your Shipment Pickup</Text>
                {/* <Text color="blueGray.400">$298.77</Text> */}
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
              {
shipment!={} &&
          <Image
          style={{width:'100%',height:250}}
      source={{
        uri: `${shipment?.shipmentOffer?.verificationImage}`,
      }}
      alt="Alternate Text"
      size="xl"
      />
    }
    {console.log(shipment?.shipmentOffer?.verificationImage)}
                {/* <Text fontWeight="medium">Tax</Text> */}
                {/* <Text color="blueGray.400">$38.84</Text> */}
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal2(true)
              }}
            >
              Verify
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Body>
              <Heading size='md'>Terms {'&'} Conditions</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quod, itaque temporibus eius aliquid ab ex fugit vitae dolorum
            hic aperiam, maxime asperiores iure pariatur rem. Sint,
            repellat animi! Odio.
          </Text>
          <HStack style={{marginTop:20}}>
          <Checkbox value={check} onChange={()=>setCheck(!check)} />
              <Text> I accept all these terms and conditions</Text>
          </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
            disabled={!check}
            colorScheme="success"
              flex="1"
              onPress={handleTermsConditions}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal3} onClose={() => setShowModal(false)} size="lg">
                  <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Confirm Pickup</Modal.Header>
          <Modal.Body>
              <Center>
                <Text fontWeight="medium">Do you confirm delivery of your shipment ?</Text>
                <HStack>
            <Button
            colorScheme="secondary"
              flex="1"
              onPress={() => {
                setShowModal3(false)
              }}
            >
              Cancel
            </Button>
            <Button
            colorScheme="success"
              flex="1"
              onPress={handleConfirmDropoff}
            >
              Yes
            </Button>
                </HStack>
              </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal4} onClose={() => setShowModal(false)} size="lg">
                  <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Body>
              <Center>
                <Text fontWeight="medium">Rate this Carrier</Text>
                <StarRating
            disabled={false}
            maxStars={5}
            rating={rating}
            selectedStar={(v) => setRating(v)}
      />
            <Button
            colorScheme="success"
              flex="1"
              onPress={handleRating}
            >
              Rate
            </Button>
              </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal>
            <Text style={styles.heading}>Shipment Details</Text>

            <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:10}} >
            <Text>Status: </Text><StatusBadge tag={shipment?.shipmentOffer?.status} />
            <Button size="sm" colorScheme="danger" style={{position:'absolute',right:40}}>Complaint</Button>
            </View>
            <Stack
          mb="0"
          mt="2.5"
          direction={{
            base: "row",
            // md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
        {(shipment?.shipmentOffer?.verified && shipment?.shipmentOffer?.status==='Active') && (
                <Button size="sm" colorScheme="blue" onPress={()=>setShowModal3(true)}>Confirm DropOff</Button>
        )}
        {(!shipment?.shipmentOffer?.verified && shipment?.shipmentOffer?.status==='Active') && (
            <Button size="sm" colorScheme="blue" onPress={()=>setShowModal(true)}>Confirm Pickup</Button>
        )}
        {
            (shipment?.shipmentOffer?.status === "Waiting" || shipment?.shipmentOffer?.status === "Active") &&
                <Button size="sm" style={shipment?.shipmentOffer?.status=='Waiting' ? {marginLeft:100} : {}}>Chat</Button>
        }
                <Button size="sm"
                style={(shipment?.shipmentOffer?.status!='Active' && shipment?.shipmentOffer?.status!='Waiting') ? {position:'absolute',right:20} : {}}
                >Carrier Profile</Button>
                {/* <Button size="sm">asd</Button> */}
                </Stack>
            <View style={styles.container}>
            <Heading size="sm" style={styles.subheading}>
                Shipment Id # {shipment?.shipmentOffer?._id}
                </Heading>

                <Heading size="md" style={styles.subheading}>
                PickUp Details
                </Heading>
                <Container style={styles.data}>
                    <Text>
                        City : {loading ? <Text>Loading...</Text>  : shipment?.shipmentOffer?.pickupCity}
                    </Text>
                    <Text>
                        Address : {loading ? <Text>Loading...</Text>  : shipment?.shipmentOffer?.pickupAddress}
                    </Text>
                    <Text>
                        Date : {loading ? <Text>Loading...</Text>  : shipment?.shipmentOffer?.pickupDate}
                    </Text>
                </Container>
                
                <Heading size="md" style={styles.subheading}>
                DropOff Details
                </Heading>
                <Container style={styles.data}>
                    <Text>
                    Contact Name :{loading ? <Text>Loading...</Text>  : 
              shipment?.shipmentOffer?.dropOffContactName
            }
                    </Text>
                    <Text>
                    Contact Number :{loading ? <Text>Loading...</Text>  : 
              shipment?.shipmentOffer?.dropOffContactNumber
            }
                    </Text>                    
                    <Text>
                    City : {loading ? <Text>Loading...</Text>  : shipment?.shipmentOffer?.destinationCity}
                    </Text>
                    <Text>
                    Address : {loading ? <Text>Loading...</Text>  : shipment?.shipmentOffer?.destinationAddress}
                    </Text>
                </Container>

                <Heading size="md" style={styles.subheading}>
                Package Details
                </Heading>
                <Container style={styles.data}>
                    <Text>
                        Package Id : {loading ? <Text>Loading...</Text>  : shipment?.package?._id}
                    </Text>
                    <Text>
                        Size : {loading ? <Text>Loading...</Text>  : shipment?.package?.packageHeight}cm X{" "}
            {loading ? <Text>Loading...</Text>  : shipment?.package?.packageWidth}cm
                    </Text>                    
                    <Text>
                        Weight : {loading ? <Text>Loading...</Text>  : shipment?.package?.packageWeight}Kg
                    </Text>
                    <Text>  
                        Type : {loading ? <Text>Loading...</Text>  : shipment?.package?.packageType}
                    </Text>
                </Container>
            </View>
        </ScrollView>
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
    container:{
        marginLeft:'5%'
    },
    subheading:{
        marginTop:10
    },
    data:{
        marginTop:10,
        backgroundColor:'lightgray',
        padding:8,
        borderRadius:20        
    },
    parent:{
        marginBottom:20
    }
})


export default shipmentDetails
