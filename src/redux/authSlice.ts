import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
  authToken: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  authToken: null
}

const storedAuthState = localStorage.getItem('authState')
const initialAuthState: AuthState = storedAuthState ? JSON.parse(storedAuthState) : initialState

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true
      localStorage.setItem('authState', JSON.stringify(state))
    },
    deAuthenticate: (state) => {
      state.isAuthenticated = false
      state.authToken = null
      localStorage.setItem('authState', JSON.stringify(state))
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload
      localStorage.setItem('authState', JSON.stringify(state))
    }
  }
})

export const { authenticate, deAuthenticate, setAuthToken } = authSlice.actions

export default authSlice.reducer
