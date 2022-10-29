import React from 'react'

import { StyleSheet,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
      <Tab.Navigator screenOptions={({route})=>({
      tabBarShowLabel:false,
      headerShown:false,
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'black',
      tabBarStyle:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        elevation:0,
        backgroundColor:'#e7e7e7',
        borderTopColor:'transparent',
        height:70,
      },
      tabBarIcon:({focused,color,size})=>{
        let iconPath;
        if(route.name === 'HomeScreen'){
          iconPath = focused ? require('../assets/icons/home-active.png') : require('../assets/icons/home.png')
        }
        else if(route.name === 'Search'){
          iconPath = focused ? require('../assets/icons/magnifying-glass-active.png') : require('../assets/icons/magnifying-glass.png')
        }
        else if(route.name === 'Bookmark'){
          iconPath = focused ? require('../assets/icons/bookmark-active.png') : require('../assets/icons/bookmark.png')
        }
        else{
          iconPath = focused ? require('../assets/icons/settings-active.png') : require('../assets/icons/settings.png')
        }
        return <Image style={styles.image} source={iconPath} />
      }
     })}>


        <Tab.Screen 
          name="HomeScreen" 
          component={Home}
        />
        <Tab.Screen 
          name="Search" 
          component={Home}
        />
        <Tab.Screen 
          name="Bookmark" 
          component={Home}
        />
        <Tab.Screen
          name="Settings" 
          component={Home} 
        />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  image:{
      width:28,
      height:28
  }
})