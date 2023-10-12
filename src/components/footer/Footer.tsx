
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" sx={{}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;