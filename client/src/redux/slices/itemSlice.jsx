import { createSlice } from '@reduxjs/toolkit'

const user = sessionStorage.getItem('session') === null ? 0 : JSON.parse(sessionStorage.getItem('session')).user

const initialState = {
  item: {
    id: null,
    name: null,
    code: null,
    desc: '',
    buy_price: null,
    sale_price: null,
    user
  },
  inventory: {
    available: null,
    unit_type: 1
  },
  colors: []
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, { payload }) => {
      state.item.id = payload.id !== undefined ? payload.id : null
      state.item.name = payload.name
      state.item.code = payload.code
      state.item.buy_price = parseFloat(payload.buy_price)
      state.item.sale_price = parseFloat(payload.sale_price)
      state.item.desc = payload.desc
    },
    setInventory: (state, { payload }) => {
      state.inventory.available = parseInt(payload.available)
      state.inventory.unit_type = 1
    },
    setInitialState: (state) => {
      return { initialState }
    }
  }
})

export const { setItem, setInventory, setInitialState } = itemSlice.actions
export const itemReducer = itemSlice.reducer
