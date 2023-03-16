import { configureStore } from '@reduxjs/toolkit'
import { itemReducer } from './slices/itemSlice'
import { itemsReducer } from './slices/itemsSlice'
import { sessionReducer } from './slices/sessionSlice'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    item: itemReducer,
    items: itemsReducer
  }
})
