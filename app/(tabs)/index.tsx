import { StyleSheet, Image } from 'react-native';
import React from 'react';


import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList, Dimensions } from 'react-native';
import RecipeItem from '../../components/RecipeItem';

const recipes = [
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        numColumns={1}
        renderItem={({ item }) => <RecipeItem title = {item.title} image={item.image} time={item.time}/>}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[styles.flatListContentContainer, styles.shadowProp]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    justifyContent: 'center',
  },
  flatListContentContainer: {
    alignItems: 'stretch',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
});
