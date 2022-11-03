import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import React, {useState, useEffect} from 'react';

import axios from 'axios';

import RecipeCard from '../components/RecipeCard';
import BackButton from '../components/BackButton';


const RecipeList = ({route}) => {
  const {category} = route.params;

  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
      .then(response => {
        setCategoryItems(response.data.meals);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.recipeListContainer}>
      <BackButton />
      <Text style={{fontSize: 26, fontWeight: '500', marginTop: 20}}>
        {category.strCategory} : ({categoryItems.length} items)
      </Text>
      <ActivityIndicator size="large" color="green" animating={isLoading} />
      <FlatList
        data={categoryItems}
        keyExtractor={item => item.idMeal.toString()}
        numColumns={2}
        renderItem={({item, index}) => {
          return <RecipeCard key={index} recipeId={item.idMeal} />;
        }}
      />
    </View>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  recipeListContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
