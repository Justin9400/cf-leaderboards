import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login/Login'
import Signup from './pages/Create-Account/CreateAccount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MTGLeaderboard from './pages/MTG-Leaderboard/mtg-leaderboard'
import MTGGameHistory from './pages/MTG-Game-History/MTG-Game-History'
import { ProtectedRoute } from './components/protected-route/ProtectedRoute'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import React from 'react'
import Profile from './pages/profile/Profile'

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)
  const authToken = useSelector((state: RootState) => state.authentication.authToken)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route
            path="home"
            element={
              <ProtectedRoute user={isAuthenticated ? { authToken } : null}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="mtg-leaderboard"
            element={
              <ProtectedRoute user={isAuthenticated ? { authToken } : null}>
                <MTGLeaderboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="mtg-game-history"
            element={
              <ProtectedRoute user={isAuthenticated ? { authToken } : null}>
                <MTGGameHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute user={isAuthenticated ? { authToken } : null}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
