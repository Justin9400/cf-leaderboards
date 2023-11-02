import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
  authToken: string | null
  tokenIssuedAt: number | null
  tokenExpiration: number | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  authToken: null,
  tokenIssuedAt: null,
  tokenExpiration: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true
      state.tokenIssuedAt = Date.now()
      // Set token expiration to, for example, 2 hours from now
      state.tokenExpiration = state.tokenIssuedAt + 2 * 60 * 60 * 1000 // 2 hours in milliseconds
      localStorage.setItem('authState', JSON.stringify(state))
    },
    deAuthenticate: (state) => {
      state.isAuthenticated = false
      state.authToken = null
      state.tokenIssuedAt = null
      state.tokenExpiration = null
      localStorage.removeItem('authState')
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload
      localStorage.setItem('authState', JSON.stringify(state))
    },
    checkTokenExpiration: (state) => {
      if (state.tokenExpiration && Date.now() > state.tokenExpiration) {
        // Token has expired
        state.isAuthenticated = false
        state.authToken = null
        state.tokenIssuedAt = null
        state.tokenExpiration = null
        localStorage.removeItem('authState')
      }
    }
  }
})

export const { authenticate, deAuthenticate, setAuthToken, checkTokenExpiration } = authSlice.actions

export default authSlice.reducer
