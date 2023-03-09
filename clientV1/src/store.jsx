import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './features/auth/loginSlice'
import { itemReducer } from './features/itemSlice'
import { itemsReducer } from './features/itemsSlice'
import { searchReducer } from './features/searchSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    items: itemsReducer,
    search: searchReducer,
    item: itemReducer
  }
})
