import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { List, Box, TextField, Drawer, Button, Stack } from '@mui/material';
// import { Option as BaseOption, optionClasses } from '@mui/base/Option';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [date, setDate] = React.useState('');

  function handleChange(event: any) {
    // Update the state with the new date
    setDate(event.target.value);
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
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
            <TextField id="date-textfield" type="date" sx={{margin: '0 auto'}} defaultValue={'10/10/2023'} value={date} onChange={handleChange} required/>
            {/* <MulitSelectDropDown/> */}
          </Stack>
        </List>
      </Box>
    );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{"Add Game"}<AddIcon/></Button>
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
  );
}

