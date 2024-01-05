import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../../components/Themed';
import RecipeItem from '../../components/RecipeItem';

const recipes = [
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
  { title: 'Recipe Name', image: require('../../assets/images/example-food.png'), time: 15 },
];

export default function RecipeListScreen() {
  const navigation = useNavigation();

  const handleRecipePress = (recipe: { title: string; image: any; time: number }) => {
    navigation.navigate('RecipeDetailsScreen', { recipe } as { recipe: { title: string; image: any; time: number } });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        numColumns={1}
        renderItem={({ item }) => (
          <RecipeItem
            title = {item.title}
            image={item.image}
            time={item.time}
            onPress={() => handleRecipePress(item)}
          />
        )}
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

