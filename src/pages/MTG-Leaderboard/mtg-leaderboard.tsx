import { Stack } from '@mui/system'
import { supabase } from '../../supabaseClient'
import { GameInfoMap } from '../../maps/GameInfoMap'
import DataTable from '../../components/data-table/DataTable'

let { data, error } = await supabase.from('vw_mtgleaderboard').select('*')
if (error) console.log('error', error)

function MTGLeaderBoard() {
  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>Magic The Gathering Leaderboard</h1>
      <DataTable columns={GameInfoMap.MagicTheGathering.LeaderboardColumns} data={data} />
    </Stack>
  )
}

export default MTGLeaderBoard
