import { Button } from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import logo from '../../img/logo.svg'
import brandon from '../../img/brandon.jpg'

const pages = [{key:'mtg', title:'Magic The Gathering'}, {key:'foos', title:'Foosball'}];


function Header() {
  return (
    <AppBar sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid lightgray' }} position="static">
      <Container maxWidth="xl">
        <Toolbar  disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="" style={{width: '40px', height: '100px'}}/>
            <Typography sx={{ml: 2, fontSize: '24px', display: 'flex', alignItems: 'center', color: 'black'}}>
  <span style={{ fontWeight: 'bold' }}>CloudFit</span>
  <span style={{ fontWeight: 'lighter' }}>Leaderboards</span>

</Typography>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            //   onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            {/* <Menu
              id="menu-appbar"
            //   anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            //   open={Boolean(anchorElNav)}
            //   onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > */}
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            {/* </Menu> */}
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* <img src={logo} alt="" style={{width: '500px', height: '500px'}}/> */}
          </Typography>
          <Box sx={{ ml: 5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.key}
                // onClick={handleCloseNavMenu}
                href={`${page.key}`}
                sx={{ fontSize: '20px', my: 2, color: 'black', display: 'block', mx: 2}}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton sx={{ p: 0, border: '1px solid lightgray', borderRadius: '50%' }}>
  <Avatar alt="Brandon Camerer" src={brandon} />
</IconButton>

            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
            //   anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            //   open={Boolean(anchorElUser)}
            //   onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;