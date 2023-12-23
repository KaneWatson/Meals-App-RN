import { useNavigation } from "@react-navigation/native"
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import MealDetails from "../MealDetails"

function MealItem({ item }) {
  const navigation = useNavigation()
  const { id, duration, complexity, affordability, title, imageUrl } = item
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => [styles.pressable, pressed ? styles.buttonPressed : null]} onPress={() => navigation.navigate("MealDetail", { mealId: id })}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails item={item} />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12
  },

  buttonPressed: {
    opacity: 0.5
  }
})
