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

function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [successfulAccountCreation, setSuccessfulAccountCreation] = React.useState<boolean | null>(null)
  const [showPassword, setShowPassword] = React.useState(false)

  const navigateToPage = (pagePath: string) => {
    const url = window.location.replace(pagePath)
    navigate(url + pagePath)
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
    if (data) {
      setSuccessfulAccountCreation(true)
      navigateToPage('home')
    } else {
      setSuccessfulAccountCreation(false)
      console.log(error)
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
        width: '20%',
        margin: '0 auto',
        padding: '20px',
        marginTop: '10vh'
      }}
    >
      <Stack spacing={3}>
        <h1>Create Account</h1>
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
        {successfulAccountCreation ? (
          <p style={{ color: 'green' }}>Confirmation email sent. Check your inbox.</p>
        ) : null}
        <Button variant="contained" onClick={createAccount}>
          Create Account
        </Button>
      </Stack>
    </Paper>
  )
}

export default Signup
