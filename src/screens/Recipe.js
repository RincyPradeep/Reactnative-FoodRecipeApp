import React, { useState, useEffect, useRef } from 'react'

import { StyleSheet, Text, View, Animated,TouchableOpacity, Image } from 'react-native'


const HEADER_HEIGHT = 350

const Recipe = ({route}) => {

  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(()=>{
    const {recipe} = route.params
    console.log("*********selected Recipe*******************",recipe)
    setSelectedRecipe(recipe)
  },[])

  const scrollY = useRef(new Animated.Value(0).current)

  const renderHeaderBar =() =>{
    return(
      <View style={styles.recipeHeader}>
        <Animated.View 
          style={[styles.animatedOuterView,
            {opacity:scrollY.interpolate({
            inputRange:[HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
            outputRange:[0,1]
            })}
          ]}
        >
          <Animated.View 
            style={[styles.animatedInnerView,
              {
                opacity:scrollY.interpolate({
                  inputRange:[HEADER_HEIGHT-100, HEADER_HEIGHT-50],
                  outputRange:[0,1]
                }),
                transform:[
                  {
                    translateY:scrollY.interpolate({
                      inputRange:[HEADER_HEIGHT-100, HEADER_HEIGHT-50],
                      outputRange:[50,0],
                      extrapolate:'clamp'
                    })
                  }
                ]
              }
            ]}
          >
            <Text style={styles.animatedText}>
                Author name
            </Text>
          </Animated.View>
          <TouchableOpacity style={styles.backButton}>
            <Image style={styles.backButtonImage} source={require('../assets/icons/back-arrow.png')} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }

  return (
    <View style={styles.recipeContainer}> 
      {/* <Animated.FlatList 
        data={selectedRecipe?.}
      />      */}
      {renderHeaderBar()}
      <Text>{selectedRecipe.strInstructions}</Text>
    </View>
  )
}

export default Recipe

const styles = StyleSheet.create({
  recipeContainer:{
    flex:1,
    backgroundColor:"#fff"
  },
  recipeHeader:{
    position:'absolute',
    top:50,
    left:0,
    right:0,
    height:0,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingBottom:10
  },
  animatedOuterView:{
    position:'absolute',
    top:100,
    left:0,
    right:0,
    height:0,
    backgroundColor:'#000',
    // opacity:scrollY.interpolate({
    //   inputRange:[HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
    //   outputRange:[0,1]
    // })
  },
  animatedInnerView:{
    position:'absolute',
    top:100,
    left:0,
    right:0,
    height:0,
    bottom:0,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:10,
    // opacity:scrollY.interpolate({
    //   inputRange:[HEADER_HEIGHT-100, HEADER_HEIGHT-50],
    //   outputRange:[0,1]
    // }),
    // transform:[
    //   {
    //     translateY:scrollY.interpolate({
    //       inputRange:[HEADER_HEIGHT-100, HEADER_HEIGHT-50]
    //     })
    //   }
    // ]
  },
  animatedText:{
    color:"#2d3436",
  },
  backButton:{
    alignItems:'center',
    justifyContent:'center',
    height:35,
    width:35,
    borderRadius:18,
    borderWidth:1,
    borderColor:'#e7e7e7',
    backgroundColor:"rgba(0,0,0,0.7)"
  },
  backButtonImage:{
    width:15,
    height:15,
    tintColor:'#e7e7e7'
  }
})