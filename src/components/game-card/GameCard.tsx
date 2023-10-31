import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import DataTable from '../data-table/DataTable'
import { useNavigate } from 'react-router-dom'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableRow from '@mui/material/TableRow'
// import goldMedal from '../img/medals/gold.svg'
// import silverMedal from '../img/medals/silver.svg'
// import bronzeMedal from '../img/medals/bronze.svg'
// import fb from '../img/fb.png'
import { Game } from '../../models/models'
import { supabase } from '../../supabaseClient'

export type IGameCardProps = {
  game: Game
  leaderboardURL: string
  gameHistoryURL: string
  banner: string
}

let tableData: any[]
let { data: leaderboard, error } = await supabase.from('vw_mtgleaderboard').select().limit(3)
if (error) console.log('error', error)
else tableData = leaderboard as any[]

export default function GameCard(props: IGameCardProps) {
  const navigate = useNavigate()

  const navigateToPage = (pagePath: string) => () => {
    const url = window.location.replace(pagePath)
    navigate(url + pagePath)
  }

  const columns = props.game.LeaderboardColumns.slice(0, 3)

  return (
    <Card sx={{ minHeight: '400px', mt: 3 }}>
      <CardMedia sx={{ height: 140 }} image={props.banner} title="Foosball" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.game.PageName}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
          {props.game.gameCardDescription}
        </Typography>
        <DataTable columns={columns} data={tableData!} />
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
