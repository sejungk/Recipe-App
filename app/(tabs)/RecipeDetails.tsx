import { StyleSheet, ScrollView, Image} from 'react-native';
import { Text, View } from '../../components/Themed';

const recipe ={
  title: 'Sweet Potato Chickpea Buddha Bowl', image: require('../../assets/images/example-food.png'), time: 60, description: 'Flavorful, filling, 30-minute Buddha bowl with roasted sweet potatoes, onion, kale, crispy chickpeas, and an AMAZING tahini-maple sauce! A healthy, satisfying plant-based meal.',
};

export default function RecipeDetails() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={recipe.image} style={styles.recipeImage} />

      <View style={styles.detailsWrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>{recipe.title}</Text>
          <Text style={styles.descriptionText}>{recipe.description}</Text>
        </View>

        {/* time and difficulty */}
        <View></View>

        {/* Ingredients Section */}
        <View style={styles.ingredientsSection}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text>VEGETABLES</Text>
          <Text>2 Tbsp olive, melted coconut, or avocado oil</Text>
          <Text>1/2 medium red onion (sliced in wedges)</Text>
          <Text>2 small sweet potatoes (halved)</Text>
          <Text>1 bundle broccolini (large stems removed // chopped)</Text>
          <Text>2 big handfuls kale (larger stems removed)</Text>
          <Text>1/4 tsp each salt + pepper</Text>

          <Text>CHICKPEAS</Text>
          <Text>1 (15-ounce) can chickpeas (drained, rinsed + patted dry)</Text>
          <Text>1 tsp cumin</Text>
          <Text>3/4 tsp chili powder</Text>
          <Text>3/4 tsp garlic powder</Text>
          <Text>1/4 tsp each salt + pepper</Text>
          <Text>1/2 tsp tsp oregano (optional)</Text>
          <Text>1/4 tsp turmeric (optional)</Text>

          <Text>TAHINI SAUCE (OPTIONAL)</Text>
          <Text>1/4 cup tahini</Text>
          <Text>1 Tbsp maple syrup</Text>
          <Text>1/2 medium lemon (juiced)</Text>
          <Text>2-4 Tbsp hot water (to thin)</Text>
        </View>

        {/* Instructions Section */}
        <View style={styles.instructionsSection}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text>1. Preheat oven to 400 degrees F (204 C) and arrange sweet potatoes and onions on a bare baking sheet. Drizzle both with a bit of oil, making sure the flesh of the sweet potatoes is well-coated and placed skin side down on the sheet.</Text>
          <Text>2. Bake for 10 minutes, then remove from the oven, flip sweet potatoes, and add broccolini. Drizzle broccolini with a bit of oil and season with a pinch each of salt and pepper.</Text>
          <Text>3. Bake for another 8-10 minutes, then remove from the oven and add kale. Drizzle kale with a touch more oil and season with a pinch each of salt and pepper. Bake for another 4-5 minutes, then set aside.</Text>
          <Text>4. While vegetables are roasting, heat a large skillet over medium heat and add chickpeas to a mixing bowl and toss with seasonings.</Text>
          <Text>5. Once hot, add 1 Tbsp oil (amount as original recipe is written // use half of total amount if altering batch size) and chickpeas and sauté, stirring frequently. If they’re browning too quickly, turn down heat. If there isn’t much browning going on, increase heat. I found 10 minutes total at slightly over medium heat was perfect.</Text>
          <Text>6. Once the chickpeas are browned and fragrant, remove from heat and set aside.</Text>
          <Text>7. Prepare sauce by adding tahini, maple syrup and lemon juice to a mixing bowl and whisking to combine. Add hot water until a pourable sauce is formed. Set aside.</Text>
          <Text>8. To serve: slice sweet potatoes into bite size pieces. Divide vegetables between 3 serving bowls and top with chickpeas + tahini sauce.</Text>
          <Text>9. Best when fresh, though leftovers will keep for a few days in the fridge.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  recipeImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  detailsWrapper: {
    marginTop: -15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  headerWrapper: {
    textAlign: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  timeDifficultyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  timeDifficultyText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontWeight: semibold,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  ingredientsSection: {
    marginTop: 10,
  },
  instructionsSection: {
    marginTop: 10,
  },
  instructionText: {
    marginBottom: 15,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
