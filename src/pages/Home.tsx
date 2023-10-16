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

function Home() {
  return (
    <Stack direction="row" spacing={3} sx={{ mt:3, ml: 3, mr: 3, display: "flex",  }}>
      <Card sx={{ mt: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={mtg}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Magic the Gathering
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Magic the Gathering leaderboards is a diverse collection of skilled players, spanning numerous formats and strategies.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Leaderboards</Button>
          <Button size="small">Game History</Button>
        </CardActions>
      </Card>
      <Card sx={{ mt: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={fb}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Foosball
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Leaderboards</Button>
          <Button size="small">Game History</Button>
        </CardActions>
      </Card>
      <Card sx={{  mt: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={fit}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fitness Challenge
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Leaderboards</Button>
          <Button size="small">Badges</Button>
        </CardActions>
      </Card>
    </Stack>
  );
}

export default Home;
