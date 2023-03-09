import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    filter: '',
    words: ''
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload
    },
    setWords: (state, { payload }) => {
      state.words = payload
    }
  }
})

export const { setFilter, setWords } = searchSlice.actions
export const searchReducer = searchSlice.reducer
