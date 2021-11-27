import React from 'react'
import {ScrollView,StyleSheet,View} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
// import { Button } from 'react-native-paper';
import TripDetails from './TripDetails';
import CreateRequestForm from './CreateRequestForm';
const CreateRequest = ({route}) => {

  var {id} = route.params;

const   defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
    }
  };
  
   const onNextStep = () => {
        console.log('called next step');
      };
        
   const   onPrevStep = () => {
        console.log('called previous step');
      };
    
   const   onSubmitStep = () => {
  };
 
    return (
        <ScrollView style={styles.parent}>
        <ProgressSteps>
          <ProgressStep
            label="Trip Details"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
          >
                <TripDetails tripId={id}/>
          </ProgressStep>
          <ProgressStep
            label="Create Request"
            onSubmit={onSubmitStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
          >
              <CreateRequestForm />
          </ProgressStep>

        </ProgressSteps>
  
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    parent:{
        fontSize:20,
        paddingTop:20,
        paddingLeft:20,
        color:'black',
        fontWeight:'bold'
    },
})
export default CreateRequest
