import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import RecipeItem from '../../components/RecipeItem';

const recipes = [
  { title: 'Recipe Name 1' },
  { title: 'Recipe Name 2' },
  { title: 'Recipe Name 3' },
  { title: 'Recipe Name 4' },
  { title: 'Recipe Name 5' },
  { title: 'Recipe Name 6' },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        numColumns={1}
        renderItem={({ item }) => <RecipeItem title={item.title} />}
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
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
