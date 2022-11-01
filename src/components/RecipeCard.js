import { StyleSheet, Text, TouchableOpacity, View, Image, Platform } from 'react-native'
import {BlurView} from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native';

import React,{useState,useEffect} from 'react'
import axios from 'axios'


const recipeCardInfo = (recipeItem) =>{
  if(Platform.OS === 'ios'){
    return(
      <BlurView 
        blurType='dark'
        overlayColor=''
        blurAmount={10}
        style={styles.recipeCardContainer}
      >
        <Text style={styles.detailsText}>
            {recipeItem.strMeal}
        </Text>
      </BlurView>
    )
  }else{
    return(
      <View style={[styles.recipeNameContainer,{backgroundColor: 'rgba(0, 0, 0, 0.9)'}]}>
        <Text style={styles.detailsText}>
            {recipeItem.strMeal}
        </Text>
      </View>
    )
  }
}

const RecipeCard = ({recipeId}) => {
    const navigation = useNavigation();

    const [recipeItem,setRecipeItem] = useState(null)

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(response=>{
            setRecipeItem(response.data.meals[0])
        }).catch(error=>{
            console.log(error)
        })        
    },[])

  return (        
    recipeItem &&
    <TouchableOpacity 
        style={styles.recipeCardContainer}
        onPress={()=>navigation.navigate('Recipe',{recipe:recipeItem})}
    >           
        <Image 
        source={{uri:recipeItem?.strMealThumb}}
        resizeMode='cover'
        style={styles.recipeCardImage}
        />        
         { recipeItem && recipeCardInfo(recipeItem) }
    </TouchableOpacity>   
  )
}

export default RecipeCard

const styles = StyleSheet.create({
    recipeCardContainer:{
        width:165,
        height:165,
        marginTop:20,
        marginRight:20
    },
    recipeCardImage:{
        width:'100%',
        height:'100%',
        borderRadius:10,    
    },
    recipeNameContainer:{
      position:'absolute',
      bottom:10,
      left:5,
      right:5,
      height:70,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:30
    },
    detailsText:{
      color:'#fff',
      fontSize:14
    }
})