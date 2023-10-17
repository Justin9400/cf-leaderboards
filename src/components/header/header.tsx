import { AppBar, IconButton, Toolbar, Box, Typography, Tooltip, Container} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../img/logo.svg";
import { styles } from "./styles";

import AccountMenu from "../account-icon-menu/account-icon-menu";
import React from "react";

function Header() {
  // const [showContent, setShowContent] = useState(false);

  // const handleHover = () => {
  //   setShowContent(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowContent(false);
  // };
  return (
    <AppBar sx={styles.appBar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="" style={{ width: "30px", height: "50px" }} />
            <Typography
              sx={{
                ml: 2,
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                color: "black",
              }}
            >
              <span style={{ fontWeight: "bold" }}>CloudFit</span>
              <span style={{ fontWeight: "lighter" }}>Leaderboards</span>
            </Typography>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={styles.iconButton}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          </Typography>
          
          {/* <Stack direction={'row'} spacing={5}  >
            {Object.values(GameInfoMap).map((page) => (
                          <SplitButton game={page} href={page.GameHistoryUrl!}/>
            ))}

          </Stack> */}
          {/* <Box sx={{ margin: '0 auto', display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.key}
                href={`${page.key}`}
                sx={{
                  fontSize: "14px",
                  my: 2,
                  color: "black",
                  display: "block",
                  mx: 2,
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box> */}
          <Box sx={{ marginLeft: 'auto' }}>
            <Tooltip title="Brandon Camerer">
              <AccountMenu/>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;