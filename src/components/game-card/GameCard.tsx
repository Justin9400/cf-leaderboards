import { Game } from '../../models/models'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'
import DataTable from '../data-table/DataTable'
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export type IGameCardProps = {
  game: Game
  leaderboardURL: string
  gameHistoryURL: string
  banner: string
  loc: number
}

// If you want to change data for leaderboard homepage, add it to the appropriate index of tableData
// Where the index for each game is found in GameInfoMap under the loc property
// e.g. MTG has loc 0 so the leaderboard data for it goes into tableData[0]

let tableData: any[] = []

let { data: mtg, error: e1 } = await supabase.from('vw_mtgleaderboard').select().limit(3)
if (e1) console.log('error', e1)
else tableData[0] = mtg

// NO VIEWS FOR THESE YET

// let { data: foosball, error: e2 } = await supabase.from('vw_mtgleaderboard').select().limit(3)
// if (e2) console.log('error', e2)
// else tableData[0] = foosball

// let { data: leaderboard, error: e3 } = await supabase.from('vw_mtgleaderboard').select().limit(3)
// if (e3) console.log('error', e3)
// else tableData[0] = leaderboard

export default function GameCard(props: IGameCardProps) {
  const navigate = useNavigate()

  const navigateToPage = (pagePath: string) => () => {
    const url = window.location.replace(pagePath)
    navigate(url + pagePath)
  }

  const columns = props.game.LeaderboardColumns.slice(0, 5)

  return (
    <Card sx={{ minHeight: '400px', mt: 3 }}>
      <CardMedia sx={{ height: 140 }} image={props.banner} title="Foosball" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.game.PageName}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
          {props.game.gameCardDescription}
        </Typography> */}
        {tableData[props.loc] ? (
          <DataTable
            columns={columns}
            tableContainerSX={{
              // Optional SX styles for TableContainer
              border: '1px #bfbfbf solid',
              mt: '20px'
              // Add more styles as needed
            }}
            data={tableData[props.loc]}
          />
        ) : (
          <>
            <Alert severity="warning">No Leader Boards Submitted Yet</Alert>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={navigateToPage(props.leaderboardURL)}>
          Leaderboards
        </Button>
        <Button size="small" onClick={navigateToPage(props.gameHistoryURL)}>
          Game History
        </Button>
      </CardActions>
    </Card>
  )
}
