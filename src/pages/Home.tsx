import { Grid } from '@mui/material'
import { GameInfoMap } from '../maps/GameInfoMap'
import GameCard from '../components/game-card/GameCard'

export default function Home() {
  const gameMap = Object.values(GameInfoMap)

  return (
    <>
      <Grid sx={{ pr: 3, pl: 3, maxWidth: '1600px', margin: '0 auto' }} container spacing={2}>
        {gameMap.map((game) => (
          <Grid key={game.key} item xs={12} sm={6} md={6} lg={6}>
            <GameCard
              game={game}
              leaderboardURL={game.LeaderBoardUrl}
              gameHistoryURL={game.GameHistoryUrl!}
              banner={game.gameBanner}
              loc={game.loc}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
