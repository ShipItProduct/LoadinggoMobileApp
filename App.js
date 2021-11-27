import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Views/Register';
import Dashboard from './Views/Dashboard';
import EmailVerificationPage from './Views/EmailVerificationPage';
import BuildProfile from './Views/BuildProfile';
import EnterEmailForForgetPassword from './Views/EnterEmailForForgetPassword';
import ResetPassword from './Views/ResetPassword';
import {LogBox } from 'react-native';
import Navigation from "./Navigation";
import {Provider} from 'react-redux';
import store from './Store/index'
import {
  NativeBaseProvider,
} from "native-base"


const App = () => {

  return (
    <NativeBaseProvider>
    <Provider store={store}>
    <Navigation/>
    </Provider>
    </NativeBaseProvider>
  );
};


export default App;
