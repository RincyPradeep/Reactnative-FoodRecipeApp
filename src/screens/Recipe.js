import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState, useEffect} from 'react';

import BackButton from '../components/BackButton';


const Recipe = ({route}) => {

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const {recipe} = route.params;
    setSelectedRecipe(recipe);
    checkBookmarked(recipe.idMeal);
  }, [isBookmarked]);

  const renderIngredients = () => {
    return (
      <View style={styles.ingredientContainer}>
        {selectedRecipe.strIngredient1 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient1}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure1}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient2 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient2}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure2}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient3 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient3}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure3}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient4 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient4}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure4}
            </Text>
          </View>
        )}

        {selectedRecipe.strIngredient5 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient5}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure5}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient6 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient6}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure6}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient7 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient7}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure7}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient8 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient8}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure8}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient9 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient9}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure9}
            </Text>
          </View>
        )}
        {selectedRecipe.strIngredient10 && (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strIngredient10}
            </Text>
            <Text style={styles.ingredientText}>
              {selectedRecipe.strMeasure10}
            </Text>
          </View>
        )}
      </View>
    );
  };

  const saveBookmarks = async (id) => {
    const fetchData = await AsyncStorage.getItem('bookmarks');
    const inputData = JSON.parse(fetchData);

    if (isBookmarked) {
      let filteredArray = inputData.filter(element => element !== id);
      AsyncStorage.setItem('bookmarks', JSON.stringify(filteredArray));
      setIsBookmarked(false);
    } else {
      if (inputData !== null) {
        var newIds = inputData.concat([id]);
        AsyncStorage.setItem('bookmarks', JSON.stringify(newIds));
      } else {
        const result = [id];
        AsyncStorage.setItem('bookmarks', JSON.stringify(result));
      }
      setIsBookmarked(true);
    }
  };

  const checkBookmarked = async id => {
    const data = await AsyncStorage.getItem('bookmarks');
    const outputData = JSON.parse(data);
    if (outputData) {
      if (outputData.includes(id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }
  };

  return (
    <ScrollView style={styles.recipeContainer}>
      {selectedRecipe && (
        <View style={styles.topContainer}>
          <BackButton />
          <TouchableOpacity
            style={styles.bookmarkContainer}
            onPress={() => saveBookmarks(selectedRecipe.idMeal)}>
            <Image
              style={styles.bookmarkImage}
              source={
                isBookmarked
                  ? require('../assets/icons/bookmark-active.png')
                  : require('../assets/icons/bookmark.png')
              }
            />
          </TouchableOpacity>
        </View>
      )}
      {selectedRecipe && (
        <View>
          <Image
            source={{uri: selectedRecipe.strMealThumb}}
            resizeMode="cover"
            style={styles.recipeImage}
          />
          <Text style={styles.recipeName}>{selectedRecipe.strMeal}</Text>
          <Text style={{fontSize: 22, fontWeight: '500'}}>Ingredients:</Text>
          {renderIngredients()}

          <Text style={{fontSize: 22, fontWeight: '500'}}>Method:</Text>
          <Text style={styles.recipeInstruction}>
            {selectedRecipe.strInstructions}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookmarkContainer: {
    width: 30,
    height: 30,
  },
  bookmarkImage: {
    width: '100%',
    height: '100%',
  },
  recipeImage: {
    height: 300,
    width: '100%',
    marginBottom: 50,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  ingredientContainer: {
    width: '70%',
    marginVertical: 10,
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientText: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom:10
  },
  recipeInstruction: {
    marginTop: 10,
    marginBottom: 100,
    color: '#000',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight:25
  },
});
