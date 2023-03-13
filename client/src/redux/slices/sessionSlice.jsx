import { createSlice } from '@reduxjs/toolkit'

const session = JSON.parse(sessionStorage.getItem('session'))

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    logged: session === null ? false : session.logged,
    user: session === null ? null : session.user,
    token: session === null ? null : session.token
  },
  reducers: {
    setSession: (state, { payload }) => {
      state.logged = payload.logged
      state.user = payload.user
      state.token = payload.token
    },
    setLogout: (state) => {
      state.logged = false
      state.user = null
      state.token = null
    }
  }
})

export const { setSession, setLogout } = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer
