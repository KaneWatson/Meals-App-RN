import { StyleSheet, Text, View } from "react-native"
import { useFavorites } from "../store/context/FavoritesContext"
import { MEALS } from "../data/dummy-data"
import MealList from "../components/MealsList/MealList"

function FavoritesScreen() {
  const { ids } = useFavorites()

  const favMeals = ids?.map(id => MEALS.find(meal => meal.id === id))

  return favMeals.length ? (
    <MealList data={favMeals} />
  ) : (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Your favorite list is empty</Text>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
})
