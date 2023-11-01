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
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import React from 'react'
// import FitnessLeaderboard from './pages/Fitness-Leaderboard/fitness-leaderboard'
// import FoosballLeaderboard from './pages/Foosball-Leaderboard/foosball-leaderboard'
// import FoosballGameHistory from './pages/Foosball-Game-History/Foosball-Game-History'

function App() {
  const authen = useSelector((state: RootState) => state.authentication.isAuthenticated)
  console.log(authen)
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',

        backgroundColor: '#f6f6f6'
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Signup />} />
            <Route
              path="home"
              element={
                <ProtectedRoute user={authen}>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="mtg-leaderboard"
              element={
                <ProtectedRoute user={authen}>
                  <MTGLeaderboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="mtg-game-history"
              element={
                <ProtectedRoute user={authen}>
                  <MTGGameHistory />
                </ProtectedRoute>
              }
            />

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
