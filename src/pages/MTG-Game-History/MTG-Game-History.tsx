import { Stack } from '@mui/system'
import { supabase } from '../../supabaseClient'
import { GameInfoMap } from '../../maps/GameInfoMap'
import { IMtgGameHistory } from '../../models/models'
import DataTable from '../../components/data-table/DataTable'
import CustomToolbar from '../../components/toolbar/CustomToolbar'

let mtgGameHistory: IMtgGameHistory[] = []

let { data: mtgGameHistoryDB, error } = await supabase.from('vw_currentmtggames').select('*')
if (error) console.log('error', error)
else mtgGameHistory = mtgGameHistoryDB as IMtgGameHistory[]

function MTGGameHistory() {
  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        Magic The Gathering Game History
      </h1>

      <CustomToolbar />

      <DataTable
        greenColumns={[1, 2, 3]}
        redColumns={[4, 5, 6]}
        columns={GameInfoMap.MagicTheGathering.GameHistoryColumns}
        data={mtgGameHistory}
      />
    </Stack>
  )
}

export default MTGGameHistory
