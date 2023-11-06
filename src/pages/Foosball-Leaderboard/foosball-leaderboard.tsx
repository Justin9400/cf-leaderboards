import { Stack } from '@mui/system'
import working from '../../img/working.gif'

function FoosballLeaderBoard() {
  return (
    <>
      <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto', alignItems: 'center' }}>
        <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>Foosball Leaderboard</h1>
        <img src={working} alt="sucks to not see the gif (jif) huh" style={{ width: '60%', height: 'auto' }} />
      </Stack>
    </>
  )
}

export default FoosballLeaderBoard
