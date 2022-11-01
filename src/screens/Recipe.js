import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'


const Recipe = ({route}) => {

  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(()=>{
    const {recipe} = route.params
    setSelectedRecipe(recipe)
  },[])

  const renderIngredients =() =>{   
    return(
      <View style={styles.ingredientContainer}>
        {
          selectedRecipe.strIngredient1 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient1}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure1}</Text>
          </View>
        }
        {
          selectedRecipe.strIngredient2 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient2}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure2}</Text>
          </View>
        }
        {
          selectedRecipe.strIngredient3 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient3}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure3}</Text>
        </View>
        }
        {
          selectedRecipe.strIngredient4 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient4}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure4}</Text>
          </View>
        }
        
        {
          selectedRecipe.strIngredient5 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient5}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure5}</Text>
          </View>
        }
        {
          selectedRecipe.strIngredient6 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient6}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure6}</Text>
          </View>
        }
        {
          selectedRecipe.strIngredient7 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient7}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure7}</Text>
          </View>
        }
        {
          selectedRecipe.strIngredient8 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient8}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure8}</Text>
          </View>
        }
        {
          selectedRecipe.strIngredient9 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient9}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure9}</Text>
          </View>
        }
        {
          selectedRecipe.strIngredient10 &&
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>{selectedRecipe.strIngredient10}</Text>
            <Text style={styles.ingredientText}>{selectedRecipe.strMeasure10}</Text>
          </View>
        }
      </View>
    )
  }


  return (
    <ScrollView style={styles.recipeContainer}> 
      <BackButton />
      {
        selectedRecipe &&
        <View>
          <Image 
            source={{uri:selectedRecipe.strMealThumb}}
            resizeMode='cover'
            style={styles.recipeImage}
          />
          <Text style={styles.recipeName}>{selectedRecipe.strMeal}</Text>
          <Text style={{fontSize:22,fontWeight:'500'}}>Ingredients:</Text>
          {renderIngredients()}
          
          <Text style={{fontSize:22,fontWeight:'500'}}>Method:</Text>
          <Text style={styles.recipeInstruction}>{selectedRecipe.strInstructions}</Text>
        </View>
      }
    </ScrollView>
  )
}

export default Recipe

const styles = StyleSheet.create({
  recipeContainer:{
    flex:1,
    backgroundColor:"#fff",
    paddingHorizontal:20,
    paddingVertical:50
  },
  recipeImage:{
    height:300,
    width:'100%',
    marginBottom:50
  },
  recipeName:{
    fontSize:24,
    fontWeight:'600',
    textAlign:'center',
    color:'#000',
    marginBottom:20,
    textDecorationLine:'underline'
  },
  ingredientContainer:{
    width:'70%',
    marginVertical:10
  },
  ingredientRow:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  ingredientText:{
    color:"#000",
    fontFamily:"Roboto-Regular",
    fontSize:16
  },
  recipeInstruction:{
    marginTop:10,
    marginBottom:100,
    color:"#000",
    fontFamily:"Roboto-Regular",
    fontSize:16
  }
})