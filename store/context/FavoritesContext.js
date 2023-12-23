import { createContext, useContext, useReducer } from "react"

const FavoritesContext = createContext()

const initialState = {
  ids: []
}

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error("Unknown action type")
    case "favorites/add":
      return { ...state, ids: [...state.ids, action.payload] }
    case "favorites/remove":
      return { ...state, ids: state.ids.filter(id => id !== action.payload) }
  }
}

function FavoritesProvider({ children }) {
  const [{ ids }, dispatch] = useReducer(reducer, initialState)
  return <FavoritesContext.Provider value={{ ids, dispatch }}>{children}</FavoritesContext.Provider>
}

function useFavorites() {
  const context = useContext(FavoritesContext)

  if (context === undefined) throw new Error("FavoritesContext was used outside of the FavoritesProvider.")

  return context
}

export { FavoritesProvider, useFavorites }
