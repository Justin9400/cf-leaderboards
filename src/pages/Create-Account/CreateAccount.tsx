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

function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [successfulAccountCreation, setSuccessfulAccountCreation] = React.useState<boolean | null>(null)
  const [showPassword, setShowPassword] = React.useState(false)

  const navigate = useNavigate()

  const navigateToPage = (pagePath: string) => () => {
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
      console.log(data)
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
      sx={{ display: 'flex', height: '50vh', width: '15%', margin: '0 auto', justifyContent: 'center' }}
    >
      <Stack spacing={5} sx={{ display: 'flex', height: '50vh', margin: '0 auto', justifyContent: 'center' }}>
        <h1>Create Account</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleOnChange(setEmail)}
        />

        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
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

        {successfulAccountCreation ? <p>Confirmation email sent</p> : null}
        <Button variant="contained" onClick={createAccount}>
          Create Account
        </Button>
      </Stack>
    </Paper>
  )
}

export default Login
