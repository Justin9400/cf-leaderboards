import { createSlice } from '@reduxjs/toolkit'

export interface ProfileState {
  email: string
}

const initialState: ProfileState = {
  email: ''
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload
    }
  }
})

export const { setUserEmail } = profileSlice.actions

export default profileSlice.reducer
