import React from 'react'

import { StyleSheet,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    // <Tab.Navigator screenOptions={{
    //     // tabBarShowLabel:false,
    //     headerShown:false,
    //     tabBarActiveTintColor:'green',
    //     tabBarInactiveTintColor:'gray',
    //     tabBarStyle:{
    //       position:'absolute',
    //       bottom:0,
    //       left:0,
    //       right:0,
    //       elevation:0,
    //       backgroundColor:'#fff',
    //       borderTopColor:'transparent',
    //       height:70,
    //     }
    //   }}
    // >

    <Tab.Navigator screenOptions={({route})=>({
      tabBarActiveTintColor:'gree',
      tabBarInactiveTintColor:'black',
      tabBarIcon:({focused,color,size})=>{
        let iconPath;
        if(route.name === 'HomeScreen'){
          iconPath = focused ? require('../assets/icons/home.png') : require('../assets/icons/home.png')
        }
        else if(route.name === 'Search'){
          iconPath = focused ? require('../assets/icons/home.png') : require('../assets/icons/home.png')
        }
        else if(route.name === 'Bookmark'){
          iconPath = focused ? require('../assets/icons/home.png') : require('../assets/icons/home.png')
        }
        else{
          iconPath = focused ? require('../assets/icons/home.png') : require('../assets/icons/home.png')
        }
        return <Image style={styles.image} source={iconPath} />
      }
     })}>


        <Tab.Screen 
          name="HomeScreen" 
          component={Home}
          // options={{
          //   tabBarIcon:({focused})=>(
          //     <TabIcon focused={focused} icon="require('../assets/icons/home.png')" />
          //   )
          // }}
        />
        <Tab.Screen 
          name="Search" 
          component={Home}
          // options={{
          //   tabBarIcon:({focused})=>(
          //     <TabIcon focused={focused} icon="require('../assets/icons/home.png')" />
          //   )
          // }}
        />
        <Tab.Screen 
          name="Bookmark" 
          component={Home}
          // options={{
          //   tabBarIcon:({focused})=>(
          //     <TabIcon focused={focused} icon="require('../assets/icons/home.png')" />
          //   )
          // }}
        />
        <Tab.Screen
          name="Settings" 
          component={Home} 
          // options={{
          //   tabBarIcon:({focused})=>(
          //     <TabIcon focused={focused} icon="require('../assets/icons/home.png')" />
          //   )
          // }}
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