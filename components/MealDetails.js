import { StyleSheet, Text, View } from "react-native"

function MealDetails({ item, style }) {
  const { duration, complexity, affordability } = item
  return (
    <View style={styles.details}>
      <Text style={[styles.detailsItem, style]}>{duration} min</Text>
      <Text style={[styles.detailsItem, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem, style]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12
  },
  detailsItem: {
    margin: 4,
    fontSize: 12
  }
})
