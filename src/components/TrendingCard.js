import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View, Image, Platform } from 'react-native'

import {BlurView} from '@react-native-community/blur'


const recipeCardDetails =(recipeItem) =>{
  return(
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>
        {recipeItem.strMeal}
      </Text>
      <Text style={styles.detailsTag}>{recipeItem.strTags && recipeItem.strTags}</Text>
    </View>
  )
}

const recipeCardInfo = (recipeItem) =>{
  if(Platform.OS === 'ios'){
    return(
      <BlurView 
        blurType='dark'
        overlayColor=''
        blurAmount={10}
        style={styles.recipeCardContainer}
      >
        {recipeCardDetails(recipeItem)}
      </BlurView>
    )
  }else{
    return(
      <View style={[styles.recipeCardContainer,{backgroundColor: 'rgba(0, 0, 0, 0.9)'}]}>
        {recipeCardDetails(recipeItem)}
      </View>
    )
  }
}

const TrendingCard = ({containerStyle,recipeItem,onPress}) => {
  return (
    <TouchableOpacity 
        style={[styles.trendingCardContainer,containerStyle]}
        onPress={onPress}
    >
      <Image 
        source={{uri:recipeItem.strMealThumb}}
        resizeMode='cover'
        style={styles.trendingCardImage}
      />
       <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{recipeItem.strCategory}</Text>
       </View>
       { recipeCardInfo(recipeItem) }
    </TouchableOpacity>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
    trendingCardContainer:{
        height:300,
        width:250,
        marginTop:10,
        marginRight:20,
        borderRadius:10
    },
    trendingCardImage:{
        width:'100%',
        height:'100%',
        borderRadius:10,    
    },
    categoryContainer:{
        position:'absolute',
        // width:'50%',
        top:20,
        left:15,
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:'rgba(0,0,0,0.7)',
        borderRadius:10
    },
    categoryText:{
        color:'#fff',
    },
    recipeCardContainer:{
      position:'absolute',
      bottom:20,
      left:10,
      right:10,
      height:100,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:30
    },
    detailsContainer:{
      flex:1,
      height:100,
      borderRadius:15
    },
    detailsText:{
      color:'#fff',
      fontSize:16,
      fontWeight:'500'
    },
    detailsTag:{
      color:'#fff',
      marginTop:20
    }
})