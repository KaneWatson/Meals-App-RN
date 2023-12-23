import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

function CategoriesScreen({ navigation }) {
  function renderItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id
      })
    }

    return <CategoryGridTile item={item} navigation={navigation} onPress={pressHandler} />
  }

  return <FlatList data={CATEGORIES} keyExtractor={item => item.id} numColumns={2} renderItem={dataItem => renderItem(dataItem)} />
}

export default CategoriesScreen

const styles = StyleSheet.create({})
