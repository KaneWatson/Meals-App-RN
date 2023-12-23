import { StyleSheet, Text, View } from "react-native"

function ItemList({ items }) {
  return items.map(item => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ))
}

export default ItemList

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b494"
  },
  itemText: {
    color: "#351401",
    textAlign: "center"
  }
})
