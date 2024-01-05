// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import RecipeListScreen from '../app/(tabs)/index';
// import RecipeDetailsScreen from '../app/RecipeDetailsScreen';

// // Define the root stack parameters
// export type RootStackParamList = {
//   RecipeListScreen: undefined;
//   RecipeDetailsScreen: { recipe: { title: string; image: any; time: number } };
// };

// // Create a Stack navigator
// const Stack = createStackNavigator<RootStackParamList>();

// const AppStackNavigator = () => (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName="RecipeListScreen">
//       <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
//       <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default AppStackNavigator;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDetailScreen from '../app/screens/RecipeDetailScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="RecipeDetail" options={{presentation: 'fullScreenModal'}} component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
