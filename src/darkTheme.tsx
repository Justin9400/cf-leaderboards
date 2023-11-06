import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#465fe2'
    },
    background: {
      default: '#0E0E0E'
    },
    text: {
      primary: '#DEDCDC'
    },
    divider: 'rgba(98,98,98,0.12)'
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
