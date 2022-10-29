import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import {BlurView} from '@react-native-community/blur'


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
    </TouchableOpacity>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
    trendingCardContainer:{
        height:350,
        width:250,
        marginTop:10,
        marginRight:20,
        borderRadius:10
    },
    trendingCardImage:{
        width:250,
        height:250,
        borderRadius:10,    
    },
    categoryContainer:{
        position:'absolute',
        top:20,
        left:15,
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:'#e7e7e7',
        borderRadius:10
    },
    categoryText:{
        color:'#000',

    }
})