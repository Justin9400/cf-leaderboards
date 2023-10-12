import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Stack } from '@mui/material';
import Header from './components/header/header'
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

function App() {
  return (
    <Stack sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <Header />
      <Body />
      <Footer />
    </Stack>
  );
}

export default App;
