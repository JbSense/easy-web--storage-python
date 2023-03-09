import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: JSON.parse(localStorage.getItem('login')),
  reducers: {
    setLogin: (state, { payload }) => {
      state.logged = true
      state.user.id = payload.users_id
      state.user.name = payload.users_name
      state.user.email = payload.users_email
    }
  }
})

export const { setLogin } = loginSlice.actions
export const loginReducer = loginSlice.reducer
