import { Grid } from '@mui/material'
// import goldMedal from '../img/medals/gold.svg'
// import silverMedal from '../img/medals/silver.svg'
// import bronzeMedal from '../img/medals/bronze.svg'

import { GameInfoMap } from '../maps/GameInfoMap'
import GameCard from '../components/game-card/GameCard'

// const medalImages = [goldMedal, silverMedal, bronzeMedal]

// const rows = [
//   { rank: 1, name: 'Jordan Olachea', medal: 1 },
//   { rank: 2, name: 'Bryan Berardi', medal: 2 },
//   { rank: 3, name: 'Tres Langhorne', medal: 3 }
//   // Add more rows as neededs
// ]
// const rowss = [
//   { rank: 1, name: 'Chris Knoll', medal: 1 },
//   { rank: 2, name: 'Mike Mercer', medal: 2 },
//   { rank: 3, name: 'Dusty Brenning', medal: 3 }
//   // Add more rows as neededs
// ]

export default function Home() {
  const gameMap = Object.values(GameInfoMap)

  return (
    <>
      <Grid sx={{ pr: 3, pl: 3, maxWidth: '1600px', margin: '0 auto' }} container spacing={2}>
        {gameMap.map((game) => (
          <Grid key={game.key} item xs={12} sm={6} md={4} lg={3}>
            <GameCard
              game={game}
              leaderboardURL={game.LeaderBoardUrl}
              gameHistoryURL={game.GameHistoryUrl!}
              banner={game.gameBanner}
              loc={game.loc}
            />
          </Grid>
        ))}
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <GameCard
            game={GameInfoMap.MagicTheGathering}
            leaderboardURL={GameInfoMap.MagicTheGathering.LeaderBoardUrl}
            gameHistoryURL={GameInfoMap.MagicTheGathering.GameHistoryUrl!}
            banner={mtg}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GameCard
            game={GameInfoMap.Foosball}
            leaderboardURL={GameInfoMap.Foosball.LeaderBoardUrl}
            gameHistoryURL={GameInfoMap.Foosball.GameHistoryUrl!}
            banner={mtg}
          />
        </Grid> */}

        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <GameCard
            game={GameInfoMap.MarchMadness}
            leaderboardURL={GameInfoMap.MarchMadness.LeaderBoardUrl}
            gameHistoryURL={GameInfoMap.MarchMadness.GameHistoryUrl!}
            banner={mtg}
          /> */}
        {/* <Card sx={{ minHeight: '400px', mt: 3 }}>
            <CardMedia sx={{ height: 140 }} image={corn} title="Cornhole" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                2023 March Madness
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
                March Madness, where basketball dreams take center stage, and champions rise through the ranks with
                unrivaled passion and strategy.
              </Typography>
              <TableContainer sx={{ border: '1px solid gray' }}>
                <Table>
                  <TableBody>
                    {rowss.map((row) => (
                      <TableRow key={row.rank}>
                        <TableCell align="center">{row.rank}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell>
                          {' '}
                          <img style={{ width: '25px' }} src={medalImages[row.medal - 1]} alt={`Medal ${row.medal}`} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card> */}
        {/* </Grid> */}

        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <GameCard
            game={GameInfoMap.MagicTheGathering}
            leaderboardURL={GameInfoMap.MagicTheGathering.LeaderBoardUrl}
            gameHistoryURL={GameInfoMap.MagicTheGathering.GameHistoryUrl!}
            banner={mtg}
          /> */}
        {/* <Card sx={{ minHeight: '400px', mt: 3 }}>
            <CardMedia sx={{ height: 140 }} image={fit} title="Fitness Challenge" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                2023 Fitness Challenge
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '20px' }}>
                This diverse mix of enthusiasts converges on a virtual platform where they unite in their shared pursuit
                of health and well-being.
              </Typography>
              <TableContainer sx={{ border: '1px solid gray' }}>
                <Table>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.rank}>
                        <TableCell align="center">{row.rank}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell>
                          {' '}
                          <img style={{ width: '25px' }} src={medalImages[row.medal - 1]} alt={`Medal ${row.medal}`} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card> */}
        {/* </Grid> */}
      </Grid>
    </>
  )
}
