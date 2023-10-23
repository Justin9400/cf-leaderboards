import { Stack } from '@mui/system'
import { Button, Paper, TextField } from '@mui/material'

function Login() {
  return (
    // <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
    <Paper
      elevation={3}
      sx={{ display: 'flex', height: '30vh', width: '15%', margin: '0 auto', justifyContent: 'center' }}
    >
      <Stack spacing={5} sx={{ display: 'flex', height: '30vh', margin: '0 auto', justifyContent: 'center' }}>
        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <TextField id="outlined-basic" label="Password" variant="outlined" />

        <Button variant="contained">Login</Button>
      </Stack>
    </Paper>
  )
}

export default Login
