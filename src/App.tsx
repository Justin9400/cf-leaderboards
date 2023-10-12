import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import MTG from './pages/MTG/mtg';
import Home from './pages/Home';
import Foosball from './pages/Foosball/foosball';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
      }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="mtg" element={<MTG/>}/>
          <Route path="foos" element={<Foosball/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Stack>
  );
}

export default App;
