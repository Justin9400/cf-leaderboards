import { Stack } from '@mui/system'
import { supabase } from '../../supabaseClient'
import { GameInfoMap } from '../../maps/GameInfoMap'
import DataTable from '../../components/data-table/DataTable'
import { ThemeProvider } from '@mui/material'
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { darkTheme } from '../../darkTheme'
import { lightTheme } from '../../lightTheme'

let { data, error } = await supabase.from('vw_mtgleaderboard').select('*')
if (error) console.log('error', error)

function MTGLeaderBoard() {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode)
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto', width: '150vh' }}>
        <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>
          Magic The Gathering Leaderboard
        </h1>
        <DataTable
          columns={GameInfoMap.MagicTheGathering.LeaderboardColumns}
          data={data}
          winnerLoserHighlight={false}
        />
      </Stack>
    </ThemeProvider>
  )
}

export default MTGLeaderBoard
