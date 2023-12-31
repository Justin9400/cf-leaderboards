import React from 'react'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField
} from '@mui/material'

function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [successfulAccountCreation, setSuccessfulAccountCreation] = React.useState<boolean | null>(null)
  const [showPassword, setShowPassword] = React.useState(false)

  const navigateToPage = (pagePath: string) => {
    navigate('/' + pagePath, { replace: true })
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  async function createAccount() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    })
    if (data.user !== null) {
      setSuccessfulAccountCreation(true)
    } else {
      setSuccessfulAccountCreation(false)
      console.log('ERROR:', error)
    }
  }

  const handleOnChange = (stateUpdater: any) => (event: any) => {
    stateUpdater(event.target.value)
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
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)' // Added a soft shadow
      }}
    >
      <Stack spacing={3}>
        <h1 style={{ margin: '0 auto', fontSize: '2em' }}>Join Us</h1> {/* Improved heading style */}
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
          <Alert severity="error" sx={{ mt: 2 }}>
            Do not use your CloudFit Password
          </Alert>
        </FormControl>
        {successfulAccountCreation ? (
          <p style={{ color: 'green', fontSize: '0.9em' }}>Confirmation email sent. Check your inbox.</p>
        ) : !successfulAccountCreation ? null : (
          <p style={{ color: 'red', fontSize: '0.9em' }}>Invalid email</p>
        )}
        <Button
          variant="contained"
          onClick={createAccount}
          sx={{
            backgroundColor: '#4CAF50', // Custom button color
            color: 'white', // Custom text color
            '&:hover': {
              backgroundColor: '#388E3C' // Custom hover color
            }
          }}
        >
          Get Started
        </Button>
        <Button
          variant="contained"
          onClick={() => navigateToPage('login')}
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
      </Stack>
    </Paper>
  )
}

export default Signup
