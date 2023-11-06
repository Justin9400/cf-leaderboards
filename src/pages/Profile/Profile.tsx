import { Stack } from '@mui/system'
import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store'
import DataTable from '../../components/data-table/DataTable'
import { supabase } from '../../supabaseClient'

// let { data: numberOfGames, error } = await supabase.from('mtgGameHistory').select('count(*)').eq('Loser1', 'Justin')
let { data: numberOfGames, error } = await supabase.from('vw_justin').select('*')
if (error) console.log('error', error)
else {
  console.log(numberOfGames)
}

// const temp = [{ mtgtotalgames: 18, mtgtotalwins: 1, mtgtotallosses: 17 }]
// else mtgGameHistory = mtgGameHistoryDB as IMtgGameHistory[]

function Profile() {
  const profile = useAppSelector((state: RootState) => state.profile)

  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '2% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>{profile.email}</h1>
      <DataTable
        columns={[
          { key: 'MTG Wins', name: 'MTG Wins' },
          { key: 'MTG Losses', name: 'MTG Losses' },
          { key: 'MTG Games Played', name: 'MTG Games Played' }
        ]}
        data={[
          {
            'MTG Wins': numberOfGames![0].mtgtotalwins,
            'MTG Losses': numberOfGames![0].mtgtotallosses,
            'MTG Games Played': numberOfGames![0].mtgtotalgames
          }
        ]}
        tableContainerSX={{
          backgroundColor: '#fff',
          color: 'rgba(0, 0, 0, 0.87)',
          WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          borderRadius: '4px',
          boxShadow:
            '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
          height: '60%',
          maxWidth: '50%',
          margin: '0 auto'
        }}
        winnerLoserHighlight={false}
      />
    </Stack>
  )
}

export default Profile
