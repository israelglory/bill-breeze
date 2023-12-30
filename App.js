/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splashScreen';
import TabStack from './src/stacks/bottomTabStack';
import WalletScreen from './src/screens/walletScreen';
import TopUpScreen from './src/screens/topUpScreen';
import TvCableScreen from './src/screens/tvCable';
import GiftScreen from './src/screens/giftScreen';
import DepositScreen from './src/screens/depositScreen';
import PowerScreen from './src/screens/powerScreen';
import BetScreen from './src/screens/bet/betScreen';
import SmsScreen from './src/screens/smsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#ffffff",
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle} >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="TabStack" component={TabStack} options={{ headerShown: false }} />
          <Stack.Screen name="wallet" component={WalletScreen} options={{ headerShown: false }} />
          <Stack.Screen name="topUp" component={TopUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="tvCable" component={TvCableScreen} options={{ headerShown: false }} />
          <Stack.Screen name="gift" component={GiftScreen} options={{ headerShown: false }} />
          <Stack.Screen name="deposit" component={DepositScreen} options={{ headerShown: false }} />
          <Stack.Screen name="power" component={PowerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="bet" component={BetScreen} options={{ headerShown: false }} />
          <Stack.Screen name="sms" component={SmsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>


    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "tomato",
  },
});

export default App;
