import { Stack } from '@mui/system'
import { Button, Paper, TextField } from '@mui/material'
// import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword, signOut, getAuth } from 'firebase/auth'
import React from 'react'

function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  // const auth = getAuth()
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code
  //     const errorMessage = error.message
  //     // ..
  //   })
  // console.log('Current user:', auth.currentUser?.email)

  // const signIn = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password)
  //   } catch (error) {
  //     console.log('Error:', error)
  //   }
  // }

  const handleOnChange = (stateUpdater: any) => (event: any) => {
    stateUpdater(event.target.value)
  }

  // const logout = async () => {
  //   try {
  //     await signOut(auth)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
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

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handleOnChange(setPassword)}
        />

        <Button variant="contained">Login</Button>
        <Button variant="contained">Create Account</Button>
      </Stack>
    </Paper>
  )
}

export default Login
