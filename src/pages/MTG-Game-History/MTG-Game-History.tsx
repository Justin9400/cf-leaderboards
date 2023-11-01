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
      <h1 style={{ margin: '2% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        Magic The Gathering Game History
      </h1>

      <CustomToolbar />

      <DataTable
        greenColumns={[1, 2, 3]}
        redColumns={[4, 5, 6]}
        columns={GameInfoMap.MagicTheGathering.GameHistoryColumns}
        data={mtgGameHistory}
        tableContainerSX={{
          // Optional SX styles for TableContainer
          backgroundColor: '#fff',
          color: 'rgba(0, 0, 0, 0.87)',
          WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          borderRadius: '4px',
          boxShadow:
            '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
          height: '60%'

          // Add more styles as needed
        }}
      />
    </Stack>
  )
}

export default MTGGameHistory
