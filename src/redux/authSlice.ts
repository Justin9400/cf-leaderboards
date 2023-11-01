import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true
    },
    deAuthenticate: (state) => {
      state.isAuthenticated = false
    }
  }
})

export const { authenticate, deAuthenticate } = authSlice.actions

export default authSlice.reducer
