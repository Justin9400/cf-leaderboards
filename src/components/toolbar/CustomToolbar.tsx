import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Toolbar,
  Typography,
  Snackbar,
} from '@mui/material';

import React, { useState } from 'react';
import { List, Box, TextField, Drawer } from '@mui/material';
import MultiSelectDropDown from '../multi-select-dropdown/MulitiSelectDropDown';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const CustomToolbar = () => {
  const [date, setDate] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  function handleChange(event: any) {
    setDate(event.target.value);
  }

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleAddButtonClick = (anchor: Anchor) => {
    // Close the drawer
    setState({ ...state, [anchor]: false });
  
    // Set the success message for the Snackbar
    setSnackbarMessage('Game added successfully');
  
    // Open the Snackbar
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };


  const list = (anchor: Anchor) => (
    <Box sx={{ width: 500 }} role="permanent">
      <List>
        <Typography sx={{ pl: 3, pt: 3, fontSize: '18px', fontWeight: '500' }}>
          Add a MTG game
        </Typography>
        <Stack sx={{ p: 3 }}>
          <TextField id="outlined-basic" label="Winner" variant="outlined" />
          <TextField sx={{ mt: 3 }} id="outlined-basic" label="Deck Strategy" variant="outlined" />
          <MultiSelectDropDown label="Mana" />
        </Stack>
        <Stack sx={{ pl: 3, pr: 3 }}>
          <TextField id="outlined-basic" label="Loser" variant="outlined" />
          <TextField sx={{ mt: 3 }} id="outlined-basic" label="Deck Strategy" variant="outlined" />
          <MultiSelectDropDown label="Mana" />
          <TextField
            sx={{ mt: 3 }}
            id="date-textfield"
            type="date"
            defaultValue={'10/10/2023'}
            value={date}
            onChange={handleChange}
            required
          />
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => handleAddButtonClick(anchor)}
          >
            Add
          </Button>
        </Stack>
      </List>
    </Box>
  );



  return (
    <Paper>
      <Stack>
        <Toolbar>
          <Grid container>
            <Grid item xs={9}>
              <Stack direction="row" spacing={1.5}>
                <div>
                  {(['right'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button startIcon={<AddIcon />} onClick={toggleDrawer(anchor, true)}>
                        {"Add Game"}
                      </Button>
                      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />
      </Stack>
      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Paper>
  );
};

export default CustomToolbar;
