import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login/Login'
import Signup from './pages/Create-Account/CreateAccount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MTGLeaderboard from './pages/MTG-Leaderboard/mtg-leaderboard'
import MTGGameHistory from './pages/MTG-Game-History/MTG-Game-History'
import { ProtectedRoute } from './components/protected-route/ProtectedRoute'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { useEffect } from 'react'
import Profile from './pages/Profile/Profile'
import { checkTokenExpiration } from './redux/authSlice'
import FoosballLeaderBoard from './pages/Foosball-Leaderboard/foosball-leaderboard'
import FoosballGameHistory from './pages/Foosball-Game-History/Foosball-Game-History'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode)
  const authToken = useSelector((state: RootState) => state.authentication.authToken)
  const dispatch = useDispatch()

  // Add an effect to check token expiration
  useEffect(() => {
    // Check token expiration periodically (e.g., every minute)
    const tokenCheckInterval = setInterval(() => {
      dispatch(checkTokenExpiration())
    }, 60 * 1000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(tokenCheckInterval)
  }, [dispatch])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Signup />} />
            <Route
              path="/"
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
              path="foosball-leaderboard"
              element={
                <ProtectedRoute user={isAuthenticated ? { authToken } : null}>
                  <FoosballLeaderBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="foosball-game-history"
              element={
                <ProtectedRoute user={isAuthenticated ? { authToken } : null}>
                  <FoosballGameHistory />
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
    </ThemeProvider>
  )
}

export default App
