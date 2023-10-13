import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GameInfoMap } from '../../maps/GameInfoMap';
import { Game } from '../../models/models';


function createData(
  name: string,
  calories: string,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 'Brandon Camerer', 6.0, 985, 0),
  createData('2', 'JK', 9.0, 37, 500),
  createData('3', 'BB', 16.0, 24, 600),
  createData('4', 'Morgan', 3.7, 67, 700),
  createData('5', 'Nick', 16.0, 49, 800),
];

export type ILeaderboardProps = {
  pageName: Game
}

export default function Leaderboard(props: ILeaderboardProps) {
  const temp = props.pageName
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.pageName === GameInfoMap.MagicTheGathering
              ? GameInfoMap.MagicTheGathering.SoloLeaderboardColumnNames?.map((column) => (<TableCell align="center">{column}</TableCell>))
              : props.pageName === GameInfoMap.Foosball
              ? GameInfoMap.Foosball.SoloLeaderboardColumnNames?.map((column) => (<TableCell align="center">{column}</TableCell>)) &&
                GameInfoMap.Foosball.TeamLeaderboardColumnNames?.map((column) => (<TableCell align="center">{column}</TableCell>))
              : props.pageName === GameInfoMap.Fitness
              ? GameInfoMap.Fitness.SoloLeaderboardColumnNames?.map((column) => (<TableCell align="center">{column}</TableCell>))
              : <div>Default content</div>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:first-child td, &:first-child th': { backgroundColor: '#cdf1cd', fontWeight:'600' } }}
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
  );
}