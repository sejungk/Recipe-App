import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const RecipeItem = ({ title, image, time }) => {
  return (
    <View style={styles.recipeContainer}>
      <Image source={image} style={styles.recipeImage} />
      <View style={styles.textContainer}>
        <Text style={styles.recipeTitle}>{title}</Text>
        <View style={styles.recipeTimeWrapper}>
          <Svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="6.5" cy="6.5" r="6" stroke="#646E77"/>
          <Path d="M6.11768 3.05882V7.26471H9.55885" stroke="#646E77" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>
          <Text style={styles.recipeTime}>{time} mins</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  textContainer: {
    margin: 20,
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipeTimeWrapper: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Align items vertically
    marginTop: 5,
  },
  recipeTime: {
    fontSize: 16,
    color: '#646E77',
    alignSelf: 'flex-start',
    marginLeft: 7,
  },
});

export default RecipeItem;
