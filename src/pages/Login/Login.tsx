import React from 'react'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField
} from '@mui/material'
import { authenticate } from '../../redux/authSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setUserEmail } from '../../redux/profileSlice'
import { RootState } from '../../redux/store'

export type ILoginProps = {
  // setAuth?: React.Dispatch<React.SetStateAction<boolean | null>>
}

function Login(props: ILoginProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [successfulLogin, setSuccessfulLogin] = React.useState<boolean | null>(null)
  const [showPassword, setShowPassword] = React.useState(false)

  const navigateToPage = (pagePath: string) => {
    navigate('/' + pagePath, { replace: true })
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (data.user !== null && data.session !== null) {
      setSuccessfulLogin(true)
      dispatch(authenticate())
      dispatch(setUserEmail(user?.email))
      navigateToPage('home')
    } else {
      console.log(error)
      setSuccessfulLogin(false)
    }
  }

  const handleOnChange = (stateUpdater: any) => (event: any) => {
    stateUpdater(event.target.value)
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        width: '30%', // Adjusted width for a more balanced look
        margin: '0 auto',
        padding: '20px',
        marginTop: '10vh',
        borderRadius: '10px', // Added a subtle border radius
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', // Added a soft shadow
        backgroundColor: '#fff' // White background color
      }}
    >
      <Stack spacing={3}>
        <h1 style={{ margin: '0 auto', fontSize: '2em' }}>Welcome</h1> {/* Improved heading style */}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleOnChange(setEmail)}
        />
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleOnChange(setPassword)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {successfulLogin === false && <p style={{ color: 'red', fontSize: '0.9em' }}>Incorrect username or password</p>}
        <Button
          variant="contained"
          onClick={signInWithEmail}
          sx={{
            backgroundColor: '#1976D2', // Custom button color
            color: 'white', // Custom text color
            '&:hover': {
              backgroundColor: '#1565C0' // Custom hover color
            }
          }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          onClick={() => navigateToPage('register')}
          sx={{
            backgroundColor: '#4CAF50', // Custom button color
            color: 'white', // Custom text color
            '&:hover': {
              backgroundColor: '#388E3C' // Custom hover color
            }
          }}
        >
          Create Account
        </Button>
      </Stack>
    </Paper>
  )
}

export default Login
