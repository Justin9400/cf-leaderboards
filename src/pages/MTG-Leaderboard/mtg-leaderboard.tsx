import { Stack } from '@mui/system'
import { supabase } from '../../supabaseClient'
import { GameInfoMap } from '../../maps/GameInfoMap'
import DataTable from '../../components/data-table/DataTable'

let { data, error } = await supabase.from('vw_mtgleaderboard').select('*')
if (error) console.log('error', error)

function MTGLeaderBoard() {
  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto', width: '80%' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>Magic The Gathering Leaderboard</h1>
      <DataTable
        tableContainerSX={{
          backgroundColor: '#fff',
          color: 'rgba(0, 0, 0, 0.87)',
          WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          borderRadius: '4px',
          boxShadow:
            '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
          height: '60%'
        }}
        columns={GameInfoMap.MagicTheGathering.LeaderboardColumns}
        data={data}
        winnerLoserHighlight={false}
      />
    </Stack>
  )
}

export default MTGLeaderBoard
