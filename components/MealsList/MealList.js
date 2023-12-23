import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "./MealItem"

function MealList({ data }) {
  function renderMealItem({ item }) {
    return <MealItem item={item} />
  }

  return (
    <View>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({})
