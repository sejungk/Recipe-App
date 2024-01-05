import { StyleSheet, ScrollView, Image} from 'react-native';
import { Text, View } from '../../components/Themed';

const recipe ={
  title: 'Sweet Potato Chickpea Buddha Bowl', image: require('../../assets/images/example-food.png'), time: 60, description: 'Flavorful, filling, 30-minute Buddha bowl with roasted sweet potatoes, onion, kale, crispy chickpeas, and an AMAZING tahini-maple sauce! A healthy, satisfying plant-based meal.',
};

export default function RecipeDetails() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={recipe.image} style={styles.recipeImage} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  }
});
