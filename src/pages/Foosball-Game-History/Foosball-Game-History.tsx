import { Stack } from '@mui/system'
import { GameInfoMap } from '../../maps/GameInfoMap'
import { Paper } from '@mui/material'
import { supabase } from '../../supabaseClient'
import { IFoosballGameHistory } from '../../models/models'
import DataTable from '../../components/data-table/DataTable'

let foosballGameHistory: IFoosballGameHistory[] = []

let { data: foosballHistoryDB, error } = await supabase.from('vw_currentfoosballgames').select('*')
if (error) console.log('error', error)
else foosballGameHistory = foosballHistoryDB as IFoosballGameHistory[]

function FoosballGameHistory() {
  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>Foosball Game History</h1>
      <Stack direction="row" spacing={10}>
        <Paper>
          <DataTable columns={GameInfoMap.Foosball.GameHistoryColumns} data={foosballGameHistory} />
        </Paper>
        <Paper>
          <DataTable columns={GameInfoMap.Foosball.GameHistoryColumns} data={foosballGameHistory} />
        </Paper>
      </Stack>
    </Stack>
  )
}

export default FoosballGameHistory
