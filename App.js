import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'

import Tabs from './src/components/Tabs';
import Login from './src/screens/Login';
import Recipe from './src/screens/Recipe';
import RecipeList from './src/screens/RecipeList';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>  
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="RecipeList" component={RecipeList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})