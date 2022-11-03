import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState, useEffect} from 'react';

import RecipeCard from '../components/RecipeCard';


const Bookmark = () => {

  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchBookmarkedItems();
  }, []);

  const pullDown = () => {
    setRefreshing(true);
    fetchBookmarkedItems();
    setRefreshing(false);
  };

  const fetchBookmarkedItems = async () => {
    const fetchData = await AsyncStorage.getItem('bookmarks');
    setBookmarks(JSON.parse(fetchData));
    setIsLoading(false);
  };

  return (
    <View style={styles.recipeListContainer}>
      <Text style={{fontSize: 26, fontWeight: '500', marginTop: 20}}>
        Bookmarked Recipes
      </Text>
      <ActivityIndicator size="large" color="green" animating={isLoading} />

      <FlatList
        data={bookmarks}
        keyExtractor={(item, index) => index}
        numColumns={2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={pullDown} />
        }
        renderItem={({item, index}) => {
          return <RecipeCard key={index} recipeId={item} />;
        }}
        ListEmptyComponent={<Text>Bookmarked list is empty.</Text>}
      />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  recipeListContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingBottom: 200,
  },
});
