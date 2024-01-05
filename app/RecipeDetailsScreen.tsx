import React from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppStackNavigator'; // Adjust the path accordingly
import { Text, View } from '../components/Themed';

type RecipeDetailsScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetailsScreen'>;

interface RecipeDetailsScreenProps {
  route: RecipeDetailsScreenRouteProp;
}

const RecipeDetailsScreen: React.FC<RecipeDetailsScreenProps> = ({ route }) => {
  const { recipe } = route.params || {};

  return (
    <View>
      <Text>{recipe.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default RecipeDetailsScreen;
