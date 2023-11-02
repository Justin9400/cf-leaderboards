import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
  authToken: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  authToken: null
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
      state.authToken = null
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload
    }
  }
})

export const { authenticate, deAuthenticate, setAuthToken } = authSlice.actions

export default authSlice.reducer
