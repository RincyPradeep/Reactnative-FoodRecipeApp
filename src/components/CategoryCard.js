import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import React from 'react'


const CategoryCard = ({containerStyle,categoryItem,onPress}) => {
  return (
    <TouchableOpacity 
        style={[styles.categoryCardContainer,containerStyle]}
        onPress={onPress}
    >
      <Image style={styles.categoryImage} source={{uri:categoryItem.strCategoryThumb}} />
      <Text style={styles.categoryName}>{categoryItem.strCategory}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    categoryCardContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        marginTop:10,
        borderRadius:10,
        backgroundColor:'#dfe6e9'
    },
    categoryImage:{
      width:70,
      height:70,
      marginRight:20,
      borderRadius:10
    },
    categoryName:{
      fontSize:16,
      color:"#000",
      fontFamily:"Roboto-Regular"
    }
})