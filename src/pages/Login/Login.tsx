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
import { useAppDispatch } from '../../redux/hooks'

export type ILoginProps = {
  // setAuth?: React.Dispatch<React.SetStateAction<boolean | null>>
}

function Login(props: ILoginProps) {
  const navigate = useNavigate()
  // const auth = useAppSelector((state: RootState) => state.authentication)
  const dispatch = useAppDispatch()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [successfulLogin, setSuccessfulLogin] = React.useState<boolean | null>(null)
  const [showPassword, setShowPassword] = React.useState(false)

  const navigateToPage = (pagePath: string) => {
    // const url = window.location.replace(pathname)
    // console.log(url)
    navigate('/' + pagePath, { replace: true })
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if (data.user !== null && data.session !== null) {
      setSuccessfulLogin(true)
      // console.log(auth)

      dispatch(authenticate())
      // if (props.setAuth) {
      //   props.setAuth(false)
      // }
      // console.log(auth)
      navigateToPage('home')
      // console.log(auth)
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
      sx={{ display: 'flex', height: '50vh', width: '15%', margin: '0 auto', justifyContent: 'center' }}
    >
      <Stack spacing={5} sx={{ display: 'flex', height: '50vh', margin: '0 auto', justifyContent: 'center' }}>
        <h1>Login</h1>
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
        {successfulLogin === true || successfulLogin === null ? null : <p>Incorrect uername or password</p>}
        <Button variant="contained" onClick={signInWithEmail}>
          Login
        </Button>
        <Button variant="contained" onClick={() => navigateToPage('register')}>
          Create Account
        </Button>
      </Stack>
    </Paper>
  )
}

export default Login
