import { StyleSheet, Text, View,StatusBar, ImageBackground } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../components/CustomButton'

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.topContainer}>
        <ImageBackground
          source={require('../assets/images/login-background.png')}
          style={styles.imageContainer}
        >
          <LinearGradient 
            start={{x:0,y:0}} end={{x:0,y:1}}
            colors={['transparent','black']}
            style={styles.gradient}
          >
            <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.description}>
          Discover more than 1000 food recipes in your hands and cooking it easily!
        </Text>
        <View style={{justifyContent:'center'}}>
          <CustomButton buttonText="Login" colors={['green','yellow']} />
          <CustomButton buttonText="Signup" colors={[]} />
        </View>        
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000'
    },
    topContainer:{
      color:'#fff',
      height:'60%',
    },
    imageContainer:{
      flex:1,
      justifyContent:'flex-end'
    },
    gradient:{
      height:200,
      justifyContent:'flex-end',
      paddingHorizontal:20
    },
    title:{
      color:'#fff',
      width:'80%',
      fontSize:52,
      fontWeight:'600'
    },
    bottomContainer:{
      paddingHorizontal:20,
      flex:1
    },
    description:{
      color:'grey',
      marginTop:20,
      width:'70%'
    }
})