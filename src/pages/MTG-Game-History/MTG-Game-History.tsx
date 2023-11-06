import { Stack } from '@mui/system'
import { supabase } from '../../supabaseClient'
import { GameInfoMap } from '../../maps/GameInfoMap'
import { IMtgGameHistory } from '../../models/models'
import DataTable from '../../components/data-table/DataTable'
import AddGameForm from '../../components/add-game-form/AddGameForm'
import RedManaImage from '../../img/mana/red.svg'
import BlackManaImage from '../../img/mana/black.svg'
import WhiteManaImage from '../../img/mana/white.svg'
import GreenManaImage from '../../img/mana/green.svg'
import BlueManaImage from '../../img/mana/blue.svg'

let mtgGameHistory: IMtgGameHistory[] = []

let { data: mtgGameHistoryDB, error } = await supabase.from('vw_currentmtggames').select('*')
if (error) console.log('error', error)
else mtgGameHistory = mtgGameHistoryDB as IMtgGameHistory[]
console.log(mtgGameHistory)
function MTGGameHistory() {
  const images = {
    Red: <img key={'redMana'} alt={'red'} src={RedManaImage} style={{ marginLeft: 5, width: '25px' }} />,
    Blue: <img key={'blueMana'} alt={'blue'} src={BlueManaImage} style={{ marginLeft: 5, width: '25px' }} />,
    Green: <img key={'greenMana'} alt={'green'} src={GreenManaImage} style={{ marginLeft: 5, width: '25px' }} />,
    White: <img key={'whiteMana'} alt={'white'} src={WhiteManaImage} style={{ marginLeft: 5, width: '25px' }} />,
    Black: <img key={'blackMana'} alt={'black'} src={BlackManaImage} style={{ marginLeft: 5, width: '25px' }} />
  }
  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto', width: '80%' }}>
      <h1 style={{ margin: '2% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        Magic The Gathering Game History
      </h1>

      <AddGameForm />

      <DataTable
        greenColumns={[1, 2, 3]}
        redColumns={[4, 5, 6]}
        columns={GameInfoMap.MagicTheGathering.GameHistoryColumns}
        data={mtgGameHistory}
        tableContainerSX={{
          // Optional SX styles for TableContainer
          WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          borderRadius: '4px',
          boxShadow:
            '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
          maxHeight: '70%'

          // Add more styles as needed
        }}
        winnerLoserHighlight={true}
        images={images}
      />
    </Stack>
  )
}

export default MTGGameHistory
