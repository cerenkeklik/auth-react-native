/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';
import * as firebase from 'firebase';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import login from './android/app/src/screens/login';
import signup from './android/app/src/screens/signup';
import main from './android/app/src/screens/main';

const SwitchNavigator = createSwitchNavigator(
  {
  
    login: login,
    signup: signup,
    main: main
  },
  {
    initialRouteName: 'login',
    headerMode: 'none'
  }
)

const App = createAppContainer(SwitchNavigator);
export default App






 


