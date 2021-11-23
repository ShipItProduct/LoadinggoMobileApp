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
import {LogBox } from 'react-native';
import {Provider} from 'react-redux';
// import { Provider } from 'react-redux'
import store from './Store/index'
LogBox.ignoreLogs(['Reanimated 2']);

const Stack = createNativeStackNavigator();



const App = () => {
 
  return (
    <Provider store={store}>
    <NavigationContainer> 
    <PaperProvider theme={theme} >  
    <Stack.Navigator screenOptions={{headerShown:false}}  >
        <Stack.Screen name="BuildProfile" component={BuildProfile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EmailVerification" component={EmailVerificationPage} />
        <Stack.Screen name="EnterEmailForForgetPassword" component={EnterEmailForForgetPassword} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name="dashboard-app" component={Dashboard} />
      </Stack.Navigator>
  </PaperProvider>
    </NavigationContainer>
    </Provider>
  );
};


export default App;
