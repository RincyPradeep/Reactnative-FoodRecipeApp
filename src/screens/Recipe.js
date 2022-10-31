import React, { useState, useEffect } from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'


const HEADER_HEIGHT = 350

const Recipe = ({route,navigation}) => {

  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(()=>{
    const {recipe} = route.params
    // console.log("*********selected Recipe*******************",recipe)
    setSelectedRecipe(recipe)
  },[])

  const renderIngredients =() =>{   
    return(
      <View style={styles.ingredientContainer}>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient1 && selectedRecipe.strIngredient1}</Text>
          <Text>{selectedRecipe.strMeasure1 && selectedRecipe.strMeasure1}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient2 && selectedRecipe.strIngredient2}</Text>
          <Text>{selectedRecipe.strMeasure2 && selectedRecipe.strMeasure2}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient3 && selectedRecipe.strIngredient3}</Text>
          <Text>{selectedRecipe.strMeasure3 && selectedRecipe.strMeasure3}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient4 && selectedRecipe.strIngredient4}</Text>
          <Text>{selectedRecipe.strMeasure4 && selectedRecipe.strMeasure4}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient5 && selectedRecipe.strIngredient5}</Text>
          <Text>{selectedRecipe.strMeasure5 && selectedRecipe.strMeasure5}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient6 && selectedRecipe.strIngredient6}</Text>
          <Text>{selectedRecipe.strMeasure6 && selectedRecipe.strMeasure6}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient7 && selectedRecipe.strIngredient7}</Text>
          <Text>{selectedRecipe.strMeasure7 && selectedRecipe.strMeasure7}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient8 && selectedRecipe.strIngredient8}</Text>
          <Text>{selectedRecipe.strMeasure8 && selectedRecipe.strMeasure8}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient9 && selectedRecipe.strIngredient9}</Text>
          <Text>{selectedRecipe.strMeasure9 && selectedRecipe.strMeasure9}</Text>
        </View>
        <View style={styles.ingredientRow}>
          <Text>{selectedRecipe.strIngredient10 && selectedRecipe.strIngredient10}</Text>
          <Text>{selectedRecipe.strMeasure10 && selectedRecipe.strMeasure10}</Text>
        </View>
      </View>
    )
  }


  return (
    <ScrollView style={styles.recipeContainer}> 
      <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()} >
        <Image style={styles.backButtonImage} source={require('../assets/icons/back-arrow.png')} />
      </TouchableOpacity>
      {
        selectedRecipe &&
        <View>
          <Image 
            source={{uri:selectedRecipe.strMealThumb}}
            resizeMode='cover'
            style={styles.recipeImage}
          />
          <Text style={styles.recipeName}>{selectedRecipe.strMeal}</Text>
          <Text style={{fontSize:18,fontWeight:'500'}}>Ingredients:</Text>
          {renderIngredients()}
          
          <Text style={{fontSize:18,fontWeight:'500'}}>Method:</Text>
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
  backButton:{
    alignItems:'center',
    justifyContent:'center',
    height:35,
    width:35,
    borderRadius:18,
    borderWidth:1,
    borderColor:'#e7e7e7',
    backgroundColor:"rgba(0,0,0,0.7)",
    marginBottom:10
  },
  backButtonImage:{
    width:15,
    height:15,
    tintColor:'#e7e7e7'
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
  recipeInstruction:{
    marginTop:10,
    marginBottom:100
  }
})