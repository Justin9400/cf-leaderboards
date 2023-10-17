import { Stack } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import mtg from "../img/mtg.png";
import fb from "../img/fb.png";
import fit from "../img/fit.png";
import corn from "../img/cornhole.png";

import Leaderboard from "../components/leaderboard/leaderboard";
import { GameInfoMap } from "../maps/GameInfoMap";
import { supabase } from "../supabaseClient";
import { useNavigate } from 'react-router-dom';



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
    <Stack sx={{maxWidth: '70%', margin: '0 auto'}}>
      <Stack direction="row" spacing={3} sx={{ mt:3, ml: 3, mr: 3, display: "flex",  }}>
        <Card sx={{ mt: 3, width:'50%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={mtg}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Magic the Gathering
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{paddingBottom: '20px'}}>
              Magic the Gathering Leaderboards, where legends are forged and destinies are sealed with every card drawn.
            </Typography>
            <Leaderboard game={GameInfoMap.MagicTheGathering} pageName="Home"/>

          </CardContent>
          <CardActions>
            <Button size="small" onClick={navigateToPage(GameInfoMap.MagicTheGathering.LeaderBoardUrl)}>More Details</Button>
            <Button size="small" onClick={navigateToPage(GameInfoMap.MagicTheGathering.GameHistoryUrl!)}>Game History</Button>
          </CardActions>
        </Card>
        <Card sx={{ mt: 3, width:'50%'}}>
          <CardMedia
            sx={{ height: 140 }}
            image={fb}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Foosball
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{paddingBottom: '20px'}}>
              Foosball leaderboards are a dynamic and competitive arena for enthusiasts of the game from various corners of the company.
            </Typography>
            
            <Leaderboard game={GameInfoMap.Foosball} pageName="Home"/>

          </CardContent>
          <CardActions>
            <Button size="small" onClick={navigateToPage(GameInfoMap.Foosball.LeaderBoardUrl)}>Leaderboards</Button>
            <Button size="small" onClick={navigateToPage(GameInfoMap.Foosball.GameHistoryUrl!)}>Game History</Button>
          </CardActions>
        </Card>
      </Stack>

      <Stack direction="row" spacing={3} sx={{ mt:3, ml: 3, mr: 3, display: "flex",  }}>
        <Card sx={{ mt: 3, width:'50%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={corn}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cornhole
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{paddingBottom: '20px'}}>
              Cornhole Leaderboard, where legends are born, and bags find their true mark.
            </Typography>
            
            <Leaderboard game={GameInfoMap.Foosball} pageName="Home"/>

          </CardContent>
          <CardActions>
            <Button size="small" onClick={navigateToPage(GameInfoMap.Cornhole.LeaderBoardUrl)}>Leaderboards</Button>
            <Button size="small" onClick={navigateToPage(GameInfoMap.Cornhole.GameHistoryUrl!)}>Game History</Button>
          </CardActions>
        </Card>
        <Card sx={{ mt: 3, width:'50%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={fit}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fitness Challenge
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{paddingBottom: '20px'}}>
            This diverse mix of enthusiasts converges on a virtual platform where they unite in their shared pursuit of health and well-being.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={navigateToPage(GameInfoMap.FitnessChallenge.LeaderBoardUrl)}>Leaderboards</Button>
            <Button size="small" onClick={navigateToPage(GameInfoMap.FitnessChallenge.GameHistoryUrl!)}>Badges</Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
}

