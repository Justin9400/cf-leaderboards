import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar } from '@mui/material';
import { footerStyles } from './Footer.styles';

function Footer() {
  return (
    <AppBar position="static" sx={{footerStyles}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;