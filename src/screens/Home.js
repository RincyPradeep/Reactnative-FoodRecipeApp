import { SafeAreaView, StyleSheet, Text, View,FlatList,Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'

import React,{useState,useEffect} from 'react'

import axios from 'axios'

import TrendingCard from '../components/TrendingCard'
import CategoryCard from '../components/CategoryCard'


const Home = ({navigation}) => {

  const [recipes,setRecipes] = useState([])
  const [categories,setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [isSearchLoading, setIsSearchLoading] = useState(null)
  const [searchItem,setSearchItem] = useState("")
  const [searchRecipes,setSearchRecipes] = useState(null)
  const [notFound,setNotFound] = useState(null)

  useEffect(()=>{
    fetchRecipes();
    fetchCategories()
  },[])

  const fetchRecipes =()=>{
    setIsLoading(true)
    return(
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=c").then((response)=>{
        setRecipes(response.data.meals)
        setIsLoading(false)
        // console.log("....................",response.data.meals)
      }).catch(error=>{
        console.log(error)
      })
    )
  }

  const fetchCategories =() =>{
    return(
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((response)=>{
        setCategories(response.data.categories)
        // console.log("....................",response.data.categories)
      }).catch(error=>{
        console.log(error)
      })
    )
  }

  const renderHeader=()=>{
    return(
      <View style={styles.header}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            Hello Rincy
          </Text>
          <Text style={styles.headerDescription}>What you want to cook today?</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/images/profile.png')} style={styles.headerImage} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderSearchBar=()=>{
    return(
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search Recipes..." 
          placeholderTextColor='gray'
          value={searchItem}
          onChangeText ={(text)=>setSearchItem(text)} />
        <TouchableOpacity onPress={fetchSearchItem}>
          <Image style={styles.searchImage} source={require('../assets/icons/magnifying-glass.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  const fetchSearchItem = () =>{
    setNotFound(false)
    if(searchItem !=""){
      setSearchRecipes(null)
      setIsSearchLoading(true)
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`).then(response=>{
      if(response.data.meals!=null)  
        setSearchRecipes(response.data.meals)
      else
        setNotFound(true)
      setIsSearchLoading(false)
      }).catch(error=>{
        console.log(error)
      })
    }else{
      setSearchRecipes(null)
    }
  }

  const renderSearchRecipes = () =>{
    return(
      <View style={styles.trendingSectionContainer}>
        <Text style={styles.trendingTitle}>Searched Recipes:({searchRecipes.length} items)</Text>
        <FlatList
          data={searchRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item)=>item.idMeal.toString()}
          renderItem={({item,index})=>{
            return(             
              <TrendingCard
                key={index}
                containerStyle={{marginLeft:index===0?20:0}}
                recipeItem={item}
                onPress={()=>navigation.navigate('Recipe',{recipe:item})}
              />
            )
          }}
        />
      </View>
    )
  }

  const renderRecipeCard =()=>{
    return(
      <View style={styles.recipeCardContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.RecipeImage} source={require('../assets/images/recipe1.jpg')} />
        </View>
        <View style={styles.recipeCardTextContainer}>
          <Text style={styles.recipeCardText}>
            You have 12 recipes that you haven't tried yet.
          </Text>
          <TouchableOpacity style={styles.recipeShowLink}>
            <Text style={styles.recipeLinkText}>See Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderTrendingSection =() =>{
    return(
      <View style={styles.trendingSectionContainer}>
        <Text style={styles.trendingTitle}>Trending Recipes</Text>
        <ActivityIndicator size='large' color="green" animating={isLoading} />
        <FlatList
          data={recipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item)=>item.idMeal.toString()}
          renderItem={({item,index})=>{
            return(             
              <TrendingCard
                key={index}
                containerStyle={{marginLeft:index===0?20:0}}
                recipeItem={item}
                onPress={()=>navigation.navigate('Recipe',{recipe:item})}
              />
            )
          }}
        />
      </View>
    )
  }

  const renderCategoryHeader=()=>{
    return(
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.textLink}>View All</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item=>item.idCategory.toString()}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
            {searchRecipes && renderSearchRecipes()}
            {isSearchLoading && 
              <ActivityIndicator size='large' color="green" animating={isSearchLoading} />           
            }
            {notFound && <Text style={{textAlign:'center',marginTop:10}}>Recipe not found</Text>}
            {renderRecipeCard()}
            {/* {renderTrendingSection()} */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem = {({item})=>{
          return(
            <CategoryCard 
              categoryItem={item}
              containerStyle={{marginHorizontal:20}}
              onPress={()=>navigation.navigate('RecipeList',{category:item})}
            />
          )
        }}
        ListFooterComponent={
          <View style={styles.listFooter}>

          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  header:{
    height:80,
    flexDirection:'row',
    marginHorizontal:20,
    alignItems:'center'
  },
  headerView:{
    flex:1
  },
  headerText:{
    color:'green',
    fontSize:26,
    fontWeight:'600'
  },
  headerDescription:{
    fontSize:16,
    marginTop:3,
    color:'gray'
  },
  headerImage:{
    width:40,
    height:40
  },
  searchBarContainer:{
    flexDirection:'row',
    height:50,
    alignItems:'center',
    marginHorizontal:20,
    paddingHorizontal:10,
    borderRadius:10,
    backgroundColor:"#dfe6e9"
  },
  searchImage:{
    width:30,
    height:30,
    tintColor:'green'
  },
  searchInput:{
    flex:1,
    paddingHorizontal:10
  },
  recipeCardContainer:{
    flexDirection:'row',
    marginHorizontal:20,
    marginTop:50,
    backgroundColor:'#b8e994',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:20
  },
  imageContainer:{
    width:100,
    alignItems:'center',
    justifyContent:'center'
  },
  RecipeImage:{
    width:80,
    height:80
  },
  recipeCardTextContainer:{
    flex:1,
    paddingVertical:10
  },
  recipeCardText:{
    fontSize:14,
    color:"#000",
    width:'70%'
  },
  recipeShowLink:{
    marginTop:20,
  },
  recipeLinkText:{
    color:"green",
    fontSize:16,
    textDecorationLine:'underline'
  },
  trendingSectionContainer:{
    marginTop:30
  },
  trendingTitle:{
    marginHorizontal:20,
    fontSize:24,
    color:"#2d3436",
    fontFamily:"Roboto-Regular"
  },
  categoryContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
    marginHorizontal:20
  },
  categoryText:{
    flex:1,
    color:'#2d3436',
    fontSize:24
  },
  textLink:{
    color:'#2d3436',
    fontSize:16
  },
  listFooter:{
    marginBottom:100
  }
})