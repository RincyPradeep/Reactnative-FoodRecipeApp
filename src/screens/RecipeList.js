import { StyleSheet, Text, View,FlatList, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'

import TrendingCard from '../components/TrendingCard'
import axios from 'axios'


const RecipeList = ({route}) => {
    const {category} = route.params

    const [categoryItems,setCategoryItems] = useState([])

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`).then((response)=>{
            setCategoryItems(response.data.meals)
            console.log("....................",response.data.meals)
      }).catch(error=>{
        console.log(error)
      })
    },[])

  return (
    <View style={styles.recipeListContainer}>
        <Text style={{fontSize:26,fontWeight:'500',marginVertical:20}}>{category.strCategory}</Text>
        <FlatList
            data={categoryItems}
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item.idMeal.toString()}
            numColumns={2}
            renderItem={({item,index})=>{
            return(             
                <TrendingCard
                    key={index}
                    containerStyle={{width:150,height:200,marginTop:20}}
                    recipeItem={item}
                    onPress={()=>navigation.navigate('Recipe',{recipe:item})}
                />
            )
            }}
        />
    </View>
  )
}

export default RecipeList

const styles = StyleSheet.create({
    recipeListContainer:{
        marginHorizontal:40,
    }
})