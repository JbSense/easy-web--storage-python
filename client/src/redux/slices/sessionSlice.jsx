import { createSlice } from '@reduxjs/toolkit'

const session = JSON.parse(sessionStorage.getItem('session'))

const { logged, user, token } = session === null ? false : session

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    logged: logged === undefined ? false : logged,
    user,
    token
  },
  reducers: {
    setSession: (state, { payload }) => {
      return {
        ...state,
        payload
      }
    }
  }
})

export const { setSession } = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer
