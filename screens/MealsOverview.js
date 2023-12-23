import { CATEGORIES, MEALS } from "../data/dummy-data"
import { useLayoutEffect } from "react"
import MealList from "../components/MealsList/MealList"

function MealsOverview({ route, navigation }) {
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(route.params.categoryId))
  const title = CATEGORIES.find(cat => cat.id === route.params.categoryId).title

  useLayoutEffect(function () {
    navigation.setOptions({ title })
  }, [])

  return <MealList data={displayedMeals} />
}

export default MealsOverview
