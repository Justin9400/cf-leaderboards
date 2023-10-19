import AddIcon from '@mui/icons-material/Add';

import { Button, Divider, Grid, Paper, Stack, Toolbar } from '@mui/material';

import * as React from 'react'
import { List, Box, TextField, Drawer } from '@mui/material'
import MultiSelectDropDown from '../multi-select-dropdown/MulitiSelectDropDown'


type Anchor = 'top' | 'left' | 'bottom' | 'right'

export const CustomToolbar = () => {

    const [date, setDate] = React.useState('');

    function handleChange(event: any) {
      setDate(event.target.value);
    }
  
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false
    });
  
    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
  
        setState({ ...state, [anchor]: open });
      };
  
      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: 500 }}
          role="permanent"
          // onClick={(event) => {
          //   if (event.target !== document.getElementById("date-textfield") || document.getElementById("drop-down")) {
          //     toggleDrawer(anchor, false)(event);
          //   }
          // }}
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <Stack>
              <TextField id="outlined-basic" label="Winner" variant="outlined" />
              <TextField id="outlined-basic" label="Deck Strategy" variant="outlined" />
              <MultiSelectDropDown label='Mana'/>
  
            </Stack>
  
            <Stack>
              <TextField id="outlined-basic" label="Loser" variant="outlined" />
              <TextField id="outlined-basic" label="Deck Strategy" variant="outlined" />
              <MultiSelectDropDown label='Mana'/>
              
              <TextField id="date-textfield" type="date" sx={{margin: '0 auto'}} defaultValue={'10/10/2023'} value={date} onChange={handleChange} required/>
            </Stack>
            <Button variant="contained">Add</Button>
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
          <Button startIcon={<AddIcon />} onClick={toggleDrawer(anchor, true)}>{"Add Game"}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
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
        </Paper>
    );
};

export default CustomToolbar;