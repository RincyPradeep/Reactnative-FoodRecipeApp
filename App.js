import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/components/Tabs';
import Login from './src/screens/Login';
import Recipe from './src/screens/Recipe';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>  
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="Home" component={Tabs} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})