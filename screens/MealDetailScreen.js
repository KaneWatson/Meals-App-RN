import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import { useLayoutEffect } from "react"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import ItemList from "../components/MealDetail/ItemList"
import IconButton from "../components/IconButton"
import { useFavorites } from "../store/context/FavoritesContext"

function MealDetailScreen({ navigation, route }) {
  const meal = MEALS.find(meal => meal.id === route.params.mealId)
  const { ids, dispatch } = useFavorites()

  function handleBookmark() {
    if (ids.includes(meal.id)) {
      dispatch({ type: "favorites/remove", payload: meal.id })
      Alert.alert(`Removed ${meal.title} from favorites`)
    }
    if (!ids.includes(meal.id)) {
      dispatch({ type: "favorites/add", payload: meal.id })
      Alert.alert(`Added ${meal.title} to favorites`)
    }
  }

  useLayoutEffect(
    function () {
      navigation.setOptions({ title: meal.title, headerRight: () => <IconButton onPress={handleBookmark} icon={ids.includes(meal.id) ? "star" : "star-outline"} color={"white"} /> })
    },
    [navigation, ids]
  )

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails item={meal} style={styles.details} />

      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <ItemList items={meal.ingredients} />
          <Subtitle>Steps</Subtitle>

          <ItemList items={meal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white"
  },
  details: {
    color: "white"
  },
  listContainer: {
    width: "80%"
  },
  contentContainer: {
    width: "100%",
    alignItems: "center"
  }
})
