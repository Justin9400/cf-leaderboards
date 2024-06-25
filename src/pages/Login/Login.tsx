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
import { authenticate, setAuthToken } from '../../redux/authSlice'
import { useAppDispatch } from '../../redux/hooks'
import { setUserEmail } from '../../redux/profileSlice'

function Login() {
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
    // when we get the user first and last names from creating an account, we can store the user names above
    if (data.user !== null && data.session !== null) {
      const authToken = data.session.access_token

      // Dispatch actions to set the authentication status and auth token in the Redux store
      dispatch(authenticate()) // Set authentication status to true
      dispatch(setUserEmail(user?.email))
      dispatch(setAuthToken(authToken)) // Set the auth token in the Redux store
      navigateToPage('')
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
        width: '30%',
        margin: '0 auto',
        padding: '20px',
        marginTop: '10vh',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Stack spacing={3}>
        <h1 style={{ margin: '0 auto', fontSize: '2em' }}>Welcome</h1>
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
            backgroundColor: '#1976D2',
            color: 'white',
            '&:hover': {
              backgroundColor: '#1565C0'
            }
          }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          onClick={() => navigateToPage('register')}
          sx={{
            backgroundColor: '#4CAF50',
            color: 'white',
            '&:hover': {
              backgroundColor: '#388E3C'
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
