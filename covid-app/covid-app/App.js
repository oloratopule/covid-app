import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Home from './components/Home';
import Details from './components/Details';
import Mask from './components/Mask';
import SocialDistancing from './components/SocialDistancing';
import Touching from './components/Touching';
import Stats from './components/Stats';
import World from './components/world'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Mask"
          component={Mask}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SocialDistancing"
          component={SocialDistancing}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Touching"
          component={Touching}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Stats"
          component={Stats}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="world"
          component={World}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
