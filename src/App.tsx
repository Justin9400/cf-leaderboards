import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { Stack } from '@mui/material'
import Login from './pages/Login/Login'
import Signup from './pages/Create-Account/CreateAccount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MTGLeaderboard from './pages/MTG-Leaderboard/mtg-leaderboard'
import MTGGameHistory from './pages/MTG-Game-History/MTG-Game-History'
import { ProtectedRoute } from './components/protected-route/ProtectedRoute'
// import FitnessLeaderboard from './pages/Fitness-Leaderboard/fitness-leaderboard'
// import FoosballLeaderboard from './pages/Foosball-Leaderboard/foosball-leaderboard'
// import FoosballGameHistory from './pages/Foosball-Game-History/Foosball-Game-History'

function App() {
  const auth = false
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',

        backgroundColor: '#f6f6f6'
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="home" element={<ProtectedRoute user={auth} children={<Home />} />} />
            <Route path="register" element={<Signup />} />
            <Route path="mtg-leaderboard" element={<ProtectedRoute user={auth} children={<MTGLeaderboard />} />} />
            <Route path="mtg-game-history" element={<ProtectedRoute user={auth} children={<MTGGameHistory />} />} />
            {/* <Route
              path="foosball-leaderboard"
              element={<ProtectedRoute user={auth} children={<FoosballLeaderboard />} />}
            />
            <Route
              path="foosball-game-history"
              element={<ProtectedRoute user={auth} children={<FoosballGameHistory />} />}
            />
            <Route
              path="fitness-leaderboard"
              element={<ProtectedRoute user={auth} children={<FitnessLeaderboard />} />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Stack>
  )
}

export default App
