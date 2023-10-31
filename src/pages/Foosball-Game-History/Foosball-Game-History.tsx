import { Stack } from '@mui/system'
import { Paper } from '@mui/material'
import { supabase } from '../../supabaseClient'
import { GameInfoMap } from '../../maps/GameInfoMap'
import { IFoosballGameHistory } from '../../models/models'
import DataTable from '../../components/data-table/DataTable'

let foosballGameHistory: IFoosballGameHistory[] = []
let soloFoosballGameHistory: IFoosballGameHistory[] = []

let { data: soloFoosballHistoryDB, error } = await supabase.from('vw_currentsolosfoosballgames').select('*')
let { data: foosballHistoryDB, error: error2 } = await supabase.from('vw_currentfoosballgames').select('*')

if (error || error2) console.log('error', error, '    error2', error2)
else {
  foosballGameHistory = foosballHistoryDB as IFoosballGameHistory[]
  soloFoosballGameHistory = soloFoosballHistoryDB as IFoosballGameHistory[]
}
function FoosballGameHistory() {
  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>Foosball Game History</h1>
      <Stack direction="row" spacing={10}>
        <Paper>
          <DataTable columns={GameInfoMap.Foosball.GameHistoryColumns} data={soloFoosballGameHistory} />
        </Paper>
        <Paper>
          <DataTable columns={GameInfoMap.Foosball.GameHistoryColumns} data={foosballGameHistory} />
        </Paper>
      </Stack>
    </Stack>
  )
}

export default FoosballGameHistory
