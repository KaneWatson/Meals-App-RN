import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverview from "./screens/MealsOverview"
import MealDetailScreen from "./screens/MealDetailScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import FavoritesScreen from "./screens/FavoritesScreen"
import { Ionicons } from "@expo/vector-icons"
import { FavoritesProvider } from "./store/context/FavoritesContext"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: "#351401" }, headerTintColor: "white", sceneContainerStyle: { backgroundColor: "#3f2f25" }, drawerContentStyle: { backgroundColor: "#3f2f25" }, drawerActiveTintColor: "#351401", drawerInactiveTintColor: "white", drawerActiveBackgroundColor: "#e4baa1" }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: "All Categories", drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name="list" /> }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name="star" /> }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <FavoritesProvider>
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#351401" }, headerTintColor: "white", contentStyle: { backgroundColor: "#3f2f25" } }}>
            <Stack.Screen options={{ headerShown: false, title: "All Categories" }} name="MealsCategories" component={DrawerNavigator} />
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </FavoritesProvider>
      </NavigationContainer>

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 24
  }
})
