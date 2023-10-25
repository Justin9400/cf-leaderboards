// import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { GameInfoMap } from '../../maps/GameInfoMap'
import { Game } from '../../models/models'
import { supabase } from '../../supabaseClient'
import Paper from '@mui/material/Paper'
// import RedManaImage from '../../img/mana/red.svg'
// import BlackManaImage from '../../img/mana/black.svg'
// import WhiteManaImage from '../../img/mana/white.svg'
// import GreenManaImage from '../../img/mana/green.svg'
// import BlueManaImage from '../../img/mana/blue.svg'
// import DefaultManaImage from '../../img/mana/blue.svg'

let { data: mtgGameHistory, error } = await supabase.from('mtgGameHistory').select('*')

console.log(mtgGameHistory ?? error)

function createData(name: string, calories: string, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein }
}

// function mapManaToImage(mana: string) {
//   switch (mana) {
//     case 'Red':
//       return RedManaImage
//     case 'Black':
//       return BlackManaImage
//     case 'White':
//       return WhiteManaImage
//     case 'Blue':
//       return BlueManaImage
//     case 'Green':
//       return GreenManaImage
//     // Add more cases for other mana symbols
//     default:
//       return DefaultManaImage // Provide a default image if the mana symbol is not recognized
//   }
// }

const rows = [
  createData('1', 'Brandon Camerer', 6.0, 985, 0),
  createData('2', 'JK', 9.0, 37, 500),
  createData('3', 'BB', 16.0, 24, 600),
  createData('4', 'Morgan', 3.7, 67, 700),
  createData('5', 'Nick', 16.0, 49, 800)
]

export type ILeaderboardProps = {
  game: Game
  pageName: 'Home' | 'Leaderboard' | 'History'
}

export default function Leaderboard(props: ILeaderboardProps) {
  // const [gameHistory, setGameHistory] = useState([]);

  // useEffect(() => {
  //   getGameHistory();
  // }, []);

  // async function getGameHistory() {
  //   const { data } = await supabase.from("mtgGameHistory").select('*');
  //   setGameHistory(data)
  // }

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {(() => {
              switch (props.game) {
                case GameInfoMap.MagicTheGathering:
                  if (props.pageName === 'Home') {
                    return GameInfoMap.MagicTheGathering.SoloLeaderboardColumnNames?.slice(0, 3).map((column) => (
                      <TableCell key={column.key + '.s'} align="center" size="medium">
                        {column.name}
                      </TableCell>
                    ))
                  } else if (props.pageName === 'Leaderboard') {
                    return (
                      GameInfoMap.MagicTheGathering.SoloLeaderboardColumnNames?.map((column) => (
                        <TableCell key={column.key + '.s'} align="center">
                          {column.name}
                        </TableCell>
                      )) &&
                      GameInfoMap.MagicTheGathering.SoloLeaderboardColumnNames?.map((column) => (
                        <TableCell key={column.key + '.s'} align="center">
                          {column.name}
                        </TableCell>
                      ))
                    )
                  } else {
                    return (
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow key={''}>
                              {GameInfoMap.MagicTheGathering.GameHistoryColumns?.map((column) => (
                                <TableCell align="left" key={column.key}>
                                  {column.name}
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {mtgGameHistory?.map((game: any) => (
                              <TableRow key={game.id}>
                                <TableCell sx={{ backgroundColor: '#f0fff0', fontWeight: '600' }} align="left">
                                  {game.Winner}
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#f0fff0' }} align="left">
                                  {game.WDeckStrat}
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#f0fff0' }} align="left">
                                  {/* {game.WDeckColor.map((mana: string, index: string) => (
                                    <img
                                      key={index}
                                      src={mapManaToImage(mana)}
                                      alt={mana}
                                      style={{ marginLeft: 5, width: '25px' }}
                                    />
                                  ))} */}
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#fff2f2' }} align="left">
                                  {game.Loser1}
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#fff2f2' }} align="left">
                                  {game.L1DeckStrat}
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#fff2f2' }} align="left">
                                  {/* {game.L1DeckColor.map((mana: string, index: string) => (
                                    <img
                                      key={index}
                                      src={mapManaToImage(mana)}
                                      alt={mana}
                                      style={{ marginLeft: 5, width: '25px' }}
                                    />
                                  ))} */}
                                </TableCell>
                                <TableCell align="center">{game.remainingLife}</TableCell>
                                <TableCell align="center">{game.length}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )
                  }
                case GameInfoMap.Foosball:
                  if (props.pageName === 'Home') {
                    return GameInfoMap.Foosball.SoloLeaderboardColumnNames?.slice(0, 3).map((column) => (
                      <TableCell key={column + '.s'} align="center">
                        {column.name}
                      </TableCell>
                    ))
                  } else if (props.pageName === 'Leaderboard') {
                    return (
                      GameInfoMap.Foosball.SoloLeaderboardColumnNames?.map((column) => (
                        <TableCell align="center">{column.name}</TableCell>
                      )) &&
                      GameInfoMap.Foosball.TeamLeaderboardColumnNames?.map((column) => (
                        <TableCell align="center">{column.name}</TableCell>
                      ))
                    )
                  } else {
                    return GameInfoMap.Foosball.GameHistoryColumns?.map((column) => (
                      <TableCell align="center">{column.name}</TableCell>
                    ))
                  }
                case GameInfoMap.MarchMadness:
                  if (props.pageName === 'Home') {
                    return GameInfoMap.MarchMadness.SoloLeaderboardColumnNames?.slice(0, 3).map((column) => (
                      <TableCell key={column.key + '.s'} align="center">
                        {column.name}
                      </TableCell>
                    ))
                  } else if (props.pageName === 'Leaderboard') {
                    return (
                      GameInfoMap.MarchMadness.SoloLeaderboardColumnNames?.map((column) => (
                        <TableCell align="center">{column.name}</TableCell>
                      )) &&
                      GameInfoMap.MarchMadness.TeamLeaderboardColumnNames?.map((column) => (
                        <TableCell align="center">{column.name}</TableCell>
                      ))
                    )
                  } else {
                    return GameInfoMap.MarchMadness.GameHistoryColumns?.map((column) => (
                      <TableCell align="center">{column.name}</TableCell>
                    ))
                  }
                case GameInfoMap.FitnessChallenge:
                  if (props.pageName === 'Home') {
                    return GameInfoMap.FitnessChallenge.SoloLeaderboardColumnNames?.map((column) => (
                      <TableCell key={column.key + '.s'} align="center">
                        {column.name}
                      </TableCell>
                    ))
                  } else if (props.pageName === 'Leaderboard') {
                    return GameInfoMap.FitnessChallenge.LeaderboardColumns?.map((column) => (
                      <TableCell key={column.key + '.s'} align="center">
                        {column.name}
                      </TableCell>
                    ))
                  } else {
                    return GameInfoMap.FitnessChallenge.GameHistoryColumns?.map((column) => (
                      <TableCell key={column.key + '.gh'} align="center">
                        {column.name}
                      </TableCell>
                    ))
                  }
                default:
                  return <></>
              }
            })()}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:first-child td, &:first-child th': {
                  backgroundColor: '#cdf1cd',
                  fontWeight: '600'
                }
              }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
