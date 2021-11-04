
import React from 'react';
import Login from './Views/Login';
import { Provider as PaperProvider } from 'react-native-paper'
import {theme} from './Config/theme'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Views/Register';
import Dashboard from './Views/Dashboard';
import EmailVerificationPage from './Views/EmailVerificationPage';
import BuildProfile from './Views/BuildProfile';
import EnterEmailForForgetPassword from './Views/EnterEmailForForgetPassword';
import ResetPassword from './Views/ResetPassword';

const Stack = createNativeStackNavigator();



const App = () => {
 
  return (
    <NavigationContainer> 
    <PaperProvider theme={theme} >  
    <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName="BuildProfile" >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="EmailVerification" component={EmailVerificationPage} />
        <Stack.Screen name="BuildProfile" component={BuildProfile} />
        <Stack.Screen name="EnterEmailForForgetPassword" component={EnterEmailForForgetPassword} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name="dashboard-app" component={Dashboard} />
      </Stack.Navigator>
  </PaperProvider>
    </NavigationContainer>
  );
};


export default App;
