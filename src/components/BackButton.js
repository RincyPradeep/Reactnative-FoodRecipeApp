import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';


const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}>
      <Image
        style={styles.backButtonImage}
        source={require('../assets/icons/back-arrow.png')}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginBottom: 10,
  },
  backButtonImage: {
    width: 15,
    height: 15,
    tintColor: '#e7e7e7',
  },
});
