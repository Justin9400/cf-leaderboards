import { Stack } from '@mui/system'
import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store'
function Profile() {
  const profile = useAppSelector((state: RootState) => state.profile)

  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '2% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>{profile.email}</h1>
    </Stack>
  )
}

export default Profile
