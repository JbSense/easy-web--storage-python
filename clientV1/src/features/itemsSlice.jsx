import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    setItems: (state, { payload }) => {
      return {
        ...state,
        payload
      }
    }
  }
})

export const { setItems } = itemsSlice.actions
export const itemsReducer = itemsSlice.reducer
