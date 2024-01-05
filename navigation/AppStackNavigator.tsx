import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipeListScreen from '../app/(tabs)/index';
import RecipeDetailsScreen from '../app/RecipeDetailsScreen';

// Define the root stack parameters
export type RootStackParamList = {
  RecipeListScreen: undefined;
  RecipeDetailsScreen: { recipe: { title: string; image: any; time: number } };
};

// Create a Stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="RecipeListScreen">
      <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
      <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStackNavigator;
