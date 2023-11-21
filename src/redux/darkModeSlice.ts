import { createSlice } from '@reduxjs/toolkit'

export interface darkModeState {
  isDarkMode: boolean
}

const initialState: darkModeState = {
  isDarkMode: false
}

export const darkModeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    }
  }
})

export const { setDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer
