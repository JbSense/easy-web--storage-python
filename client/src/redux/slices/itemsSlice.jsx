import { createSlice } from '@reduxjs/toolkit'
import api from '../../utils/api'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    setItems: (state, { payload }) => {
      return {
        ...state,
        payload
      }
    },
    updateItems: (state) => {
      api({
        route: 'storageGetAllSimple',
        params: JSON.parse(sessionStorage.getItem('session')).user
      }).then(response => {
        state = response
      })
    }
  }
})

export const { setItems, updateItems } = itemsSlice.actions
export const itemsReducer = itemsSlice.reducer
