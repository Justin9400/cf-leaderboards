import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#465fe2'
    },
    background: {
      default: '#F1F1F1'
    },
    text: {
      primary: '#212323'
    },
    divider: 'rgba(192,192,192,0.12)'
  },
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: '#465fe2'
        }
      }
    }
  }
})