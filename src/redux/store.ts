import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import profileReducer from './profileSlice'

const storedAuthState = localStorage.getItem('authState')
const initialAuthState = storedAuthState ? JSON.parse(storedAuthState) : authReducer(undefined, { type: 'INIT' })

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    profile: profileReducer
  },
  preloadedState: {
    authentication: initialAuthState
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
