import React from 'react'
import {ScrollView,StyleSheet,View} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import StepOne from './../Components/createAuction/stepOne';
import StepTwo from '../Components/createAuction/stepTwo.js';
import StepThree from '../Components/createAuction/stepThree.js';
const CreateAuction = () => {

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
    console.log('Submit called');
  };


    return (
        <ScrollView style={styles.parent}>
        <ProgressSteps>
          <ProgressStep
            label={"Pickup & DropOff Details"}
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
          >
              <StepOne/>
          </ProgressStep>
          <ProgressStep
            label="Package Details"
            onNext={onNextStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
          >
              <StepTwo/>
          </ProgressStep>
          <ProgressStep
            label="Auction Details"
            onSubmit={onSubmitStep}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}
          >
            <StepThree/>
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
export default CreateAuction

