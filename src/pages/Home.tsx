import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Leaderboard from "../components/leaderboard/leaderboard";
import { GameInfoMap } from "../maps/GameInfoMap";
import { supabase } from "../supabaseClient";
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import goldMedal from "../img/medals/gold.svg";
import silverMedal from "../img/medals/silver.svg";
import bronzeMedal from "../img/medals/bronze.svg";

import mtg from "../img/mtg.png";
import fb from "../img/fb.png";
import fit from "../img/fit.png";
import corn from "../img/cornhole.png";

const medalImages = [goldMedal, silverMedal, bronzeMedal];

const rows = [
  { rank: 1, name: 'Jordan Olachea', medal: 1 },
  { rank: 2, name: 'Bryan Berardi', medal: 2 },
  { rank: 3, name: 'Tres Langhorne', medal: 3 },
  // Add more rows as needed
];
const rowss = [
  { rank: 1, name: 'Chris Knoll', medal: 1 },
  { rank: 2, name: 'Mike Mercer', medal: 2 },
  { rank: 3, name: 'Dusty Brenning', medal: 3 },
  // Add more rows as needed
];

let { data: mtgGameHistory, error } = await supabase
  .from('mtgGameHistory')
  .select('*');

console.log(error ?? mtgGameHistory);

export default function Home() {
  const navigate = useNavigate();

  const navigateToPage = (pagePath: string) => () => {
    navigate(pagePath);
  }
  
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minHeight:'400px', mt: 3 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={mtg}
              title="Magic the Gathering"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Magic the Gathering
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
                Magic the Gathering Leaderboards, where legends are forged and destinies are sealed with every card drawn.
              </Typography>
              <Leaderboard game={GameInfoMap.MagicTheGathering} pageName="Home" />
            </CardContent>
            <CardActions >
              <Button size="small" onClick={navigateToPage(GameInfoMap.MagicTheGathering.LeaderBoardUrl)}>More Details</Button>
              <Button size="small" onClick={navigateToPage(GameInfoMap.MagicTheGathering.GameHistoryUrl!)}>Game History</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minHeight:'400px', mt: 3 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={fb}
              title="Foosball"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Foosball
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
                Foosball leaderboards are a dynamic and competitive arena for enthusiasts of the game from various corners of the company.
              </Typography>
              <Leaderboard game={GameInfoMap.Foosball} pageName="Home" />
            </CardContent>
            <CardActions >
              <Button size="small" onClick={navigateToPage(GameInfoMap.Foosball.LeaderBoardUrl)}>Leaderboards</Button>
              <Button size="small" onClick={navigateToPage(GameInfoMap.Foosball.GameHistoryUrl!)}>Game History</Button>
            </CardActions>
          </Card>
        </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ minHeight:'400px', mt: 3 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={corn}
            title="Cornhole"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              2023 March Madness
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
            March Madness, where basketball dreams take center stage, and champions rise through the ranks with unrivaled passion and strategy.
            </Typography>
            <TableContainer sx={{border:'1px solid gray'}}>
          <Table>
             <TableBody>
              {rowss.map((row) => (
                <TableRow key={row.rank}>
                  <TableCell align="center">{row.rank}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell> <img style={{width: '25px'}} src={medalImages[row.medal - 1]} alt={`Medal ${row.medal}`} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </CardContent>
          {/* <CardActions> */}
            {/* <Button size="small" onClick={navigateToPage(GameInfoMap.Cornhole.LeaderBoardUrl)}>Full Leaderboard</Button> */}
            {/* <Button size="small" onClick={navigateToPage(GameInfoMap.Cornhole.GameHistoryUrl!)}>Game History</Button> */}
          {/* </CardActions> */}
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ minHeight:'400px', mt: 3 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={fit}
            title="Fitness Challenge"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              2023 Fitness Challenge
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
              This diverse mix of enthusiasts converges on a virtual platform where they unite in their shared pursuit of health and well-being.
            </Typography>
            <TableContainer sx={{border:'1px solid gray'}}>
          <Table>
             <TableBody>
              {rows.map((row) => (
                <TableRow key={row.rank}>
                  <TableCell align="center">{row.rank}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell> <img style={{width: '25px'}} src={medalImages[row.medal - 1]} alt={`Medal ${row.medal}`} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
           
          </CardContent>
          {/* <CardActions >
            <Button size="small" onClick={navigateToPage(GameInfoMap.FitnessChallenge.LeaderBoardUrl)}>Leaderboards</Button>
            <Button size="small" onClick={navigateToPage(GameInfoMap.FitnessChallenge.GameHistoryUrl!)}>Badges</Button>
          </CardActions> */}
        </Card>
      </Grid>
    </Grid>
  );
}
