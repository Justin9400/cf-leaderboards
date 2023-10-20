import { Stack } from '@mui/system'
import Leaderboard from '../../components/leaderboard/leaderboard'
import { GameInfoMap } from '../../maps/GameInfoMap'
import { Paper } from '@mui/material'

function MTGLeaderBoard() {
  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>Magic The Gathering Leaderboard</h1>
      <Paper>
        <Leaderboard game={GameInfoMap.MagicTheGathering} pageName="Leaderboard" />
      </Paper>
    </Stack>
  )
}

export default MTGLeaderBoard
