import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    item: {
      name: '',
      code: '',
      desc: '',
      buy_price: 0,
      sale_price: 0,
      user: JSON.parse(localStorage.getItem('login')).user.id
    },
    inventory: {
      available: 0,
      unit_type: 1
    },
    colors: []
  },
  reducers: {
    setItem: (state, { payload }) => {
      state.item.name = payload.name
      state.item.code = payload.code
      state.item.buy_price = parseFloat(payload.buy_price)
      state.item.sale_price = parseFloat(payload.sale_price)
      state.item.desc = payload.desc
    },
    setInventory: (state, { payload }) => {
      state.inventory.available = payload.available
      state.inventory.unit_type = payload.unit_type
    }
  }
})

export const { setItem, setInventory } = itemSlice.actions
export const itemReducer = itemSlice.reducer
