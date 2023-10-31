import * as React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { supabase } from '../../supabaseClient'
import { List, Box, TextField, Drawer, Button, Stack } from '@mui/material'
import MultiSelectDropDown from '../multi-select-dropdown/MulitiSelectDropDown'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const dataMap = {
  Winner: undefined,
  WDeck: undefined,
  Loser1: undefined,
  L1Deck: undefined,
  Loser2: undefined,
  L2Deck: undefined,
  Loser3: undefined,
  L3Deck: undefined,
  remainingLife: undefined,
  length: undefined,
  date: undefined
  // Add more keys as needed
}

async function insert(data: []) {
  let { data: game, error } = await supabase.from('mtgGameHistory').insert([data])
}
export default function TemporaryDrawer() {
  const [winner, setWinner] = React.useState('')
  const [wdeck, setWDeck] = React.useState({ Mana: [], strat: null })
  const [loser1, setLoser1] = React.useState('')
  const [l1deck, setL1Deck] = React.useState({ Mana: [], strat: null })
  const [loser2, setLoser2] = React.useState('')
  const [l2deck, setL2Deck] = React.useState({ Mana: [], strat: null })
  const [loser3, setLoser3] = React.useState('')
  const [l3deck, setL3Deck] = React.useState({ Mana: [], strat: null })
  const [remaininglife, setRemainingLife] = React.useState('')
  const [date, setDate] = React.useState('')
  const currentDate = new Date().toISOString().split('T')[0]

  // function handleChange(event: any) {
  //   setDate(event.target.value);
  // }

  const handleWinnerChange = (e: any) => {
    setWinner(e.target.value)
    dataMap.Winner = e
    console.log(dataMap.Winner)
  }

  const handleLoser1Change = (e: any) => {
    setLoser1(e.target.value)
    dataMap.Loser1 = e
    console.log(dataMap.Loser1)
  }

  const handleDateChange = (e: any) => {
    setDate(e.target.value)
    dataMap.date = e
    console.log(dataMap.date)
  }

  React.useEffect(() => {
    // Get the current date in the format YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0]

    // Set the default value to the current date
    setDate(currentDate)
  }, [])

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 500 }} role="permanent">
      <List>
        <Stack>
          <TextField
            id="outlined-basic"
            label="Winner"
            variant="outlined"
            value={winner}
            onChange={handleWinnerChange}
            required
          />
          <TextField
            id="outlined-basic"
            label="Deck Strategy"
            variant="outlined"
            value={wdeck.strat}
            onChange={() => console.log('2')}
            required
          />
          {/* <MultiSelectDropDown label="Mana" value={wdeck.Mana} /> */}
        </Stack>

        <Stack>
          <TextField
            id="outlined-basic"
            label="Loser"
            variant="outlined"
            value={loser1}
            onChange={() => console.log('3')}
            required
          />
          <TextField
            id="outlined-basic"
            label="Deck Strategy"
            variant="outlined"
            value={l1deck.strat}
            onChange={() => console.log('4')}
            required
          />
          {/* <MultiSelectDropDown label="Mana" value={l1deck.Mana} /> */}

          <TextField
            id="date-textfield"
            type="date"
            sx={{ margin: '0 auto' }}
            defaultValue={currentDate}
            value={date}
            onChange={() => console.log('5')}
            required
          />
        </Stack>
        <Button variant="contained" onClick={() => console.log('HERE')}>
          Add
        </Button>
      </List>
    </Box>
  )

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {'Add Game'}
            <AddIcon />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

// import React, { useState } from 'react';
// import { Button, Drawer, TextField, List, Box, Stack } from '@mui/material';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

// const TemporaryDrawer: React.FC = () => {
//   const [value, setValue] = useState('');
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const openDrawer = () => {
//     setIsDrawerOpen(true);
//   };

//   const closeDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };

//   const logStoredValue = () => {
//     console.log('Stored Value:', value);
//   };

//   const drawerContent = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <List>
//         <Stack spacing={2} sx={{ p: 2 }}>
//           <TextField
//             label="Input Value"
//             variant="outlined"
//             value={value}
//             onChange={handleInputChange}
//           />
//           <Button variant="contained" onClick={logStoredValue}>
//             Log Stored Value
//           </Button>
//         </Stack>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={openDrawer}>Open Drawer</Button>
//       <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
//         {drawerContent}
//       </Drawer>
//     </div>
//   );
// };

// export default TemporaryDrawer;
