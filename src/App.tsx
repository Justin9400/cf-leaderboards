import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import MTGLeaderboard from './pages/MTG-Leaderboard/mtg-leaderboard'
import FitnessLeaderboard from './pages/Fitness-Leaderboard/fitness-leaderboard'
import Home from './pages/Home'
import FoosballLeaderboard from './pages/Foosball-Leaderboard/foosball-leaderboard'

import { Stack } from '@mui/material'
import FoosballGameHistory from './pages/Foosball-Game-History/Foosball-Game-History'
import MTGGameHistory from './pages/MTG-Game-History/MTG-Game-History'
import React from 'react'
import Login from './pages/Login/Login'
import Signup from './pages/Create-Account/CreateAccount'

function App() {
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
            <Route path="home" index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Signup />} />
            <Route path="mtg-leaderboard" element={<MTGLeaderboard />} />
            <Route path="mtg-game-history" element={<MTGGameHistory />} />
            <Route path="foosball-leaderboard" element={<FoosballLeaderboard />} />
            <Route path="foosball-game-history" element={<FoosballGameHistory />} />
            <Route path="fitness-leaderboard" element={<FitnessLeaderboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Stack>
  )
}

export default App
