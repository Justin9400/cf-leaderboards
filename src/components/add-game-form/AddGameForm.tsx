import AddIcon from '@mui/icons-material/Add'
import {
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Toolbar,
  Typography,
  Snackbar,
  List,
  Box,
  TextField,
  Drawer
} from '@mui/material'
import React, { useState } from 'react'
import MultiSelectDropDown from '../multi-select-dropdown/MultiSelectDropDown'
import { supabase } from '../../supabaseClient'
// import { supabase } from '../../supabaseClient'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

// const dataMap = {
//   Winner: '',
//   WDeckStrat: '',
//   WDeckColor: '',
//   Loser1: '',
//   L1DeckStrat: '',
//   L1DeckColor: '',
//   L2DeckStrat: '',
//   L2DeckColor: '',
//   L3DeckStrat: '',
//   L3DeckColor: '',
//   remainingLife: '',
//   length: '',
//   date: ''
//   // Add more keys as needed
// }

export const CustomToolbar = () => {
  // const currentDate = new Date()

  const [winner, setWinner] = React.useState('')
  const [wdeckstrat, setWDeckStrat] = React.useState('')
  const [wdeckcolor, setWDeckColor] = React.useState([])
  const [loser1, setLoser1] = React.useState('')
  const [l1deckstrat, setL1DeckStrat] = React.useState('')
  const [l1deckcolor, setL1DeckColor] = React.useState([])
  // const [loser2, setLoser2] = React.useState('')
  // const [l2deckstrat, setL2DeckStrat] = React.useState('')
  // const [l2deckcolor, setL2DeckColor] = React.useState([])
  // const [loser3, setLoser3] = React.useState('')
  // const [l3deckstrat, setL3DeckStrat] = React.useState('')
  // const [l3deckcolor, setL3DeckColor] = React.useState([])
  const [remaininglife, setRemainingLife] = React.useState('')
  const [length, setLength] = React.useState('')
  const [date, setDate] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const [state, setState] = useState({
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

  const handleOnChange = (stateUpdater: any) => (event: any) => {
    stateUpdater(event.target.value)
  }

  const handleAddButtonClick = (anchor: Anchor) => {
    if (
      winner.trim() === '' ||
      wdeckstrat.trim() === '' ||
      wdeckcolor.length === 0 ||
      loser1.trim() === '' ||
      l1deckstrat.trim() === '' ||
      l1deckcolor.length === 0 ||
      !date
    ) {
      setSnackbarMessage('Please fill in all required fields')
      setSnackbarOpen(true)
    } else {
      try {
        supabase
          .from('mtgGameHistory')
          .insert({
            Winner: winner.trim(),
            Loser1: loser1.trim(),
            Loser2: null,
            Loser3: null,
            remainingLife: remaininglife ? remaininglife.trim() : null,
            length: length ? length.trim() : null,
            Date: date,
            WDeckStrat: wdeckstrat.trim(),
            L1DeckStrat: l1deckstrat.trim(),
            L2DeckStrat: null,
            L3DeckStrat: null,
            WDeckColor: wdeckcolor,
            L1DeckColor: l1deckcolor,
            L2DeckColor: null,
            L3DeckColor: null
          })
          .then((response) => {
            if (response.error) {
              console.error('Error inserting data:', response.error)
            } else {
              console.log('Data inserted successfully:', response.data)
            }
          })
      } catch (error) {
        console.error('Error:', error)
      }
      setState({ ...state, [anchor]: false })
      setWinner('')
      setWDeckStrat('')
      setWDeckColor([])
      setLoser1('')
      setL1DeckStrat('')
      setL1DeckColor([])
      setDate('')
      setSnackbarMessage('Game added successfully, refresh page to view')
      setSnackbarOpen(true)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 500 }} role="permanent">
      <List>
        <Typography sx={{ pl: 3, pt: 3, fontSize: '18px', fontWeight: '500' }}>Add a MTG game</Typography>
        <Stack sx={{ p: 3 }}>
          <TextField
            id="outlined-basic"
            label="Winner"
            variant="outlined"
            value={winner}
            onChange={handleOnChange(setWinner)}
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Deck Strategy"
            variant="outlined"
            value={wdeckstrat}
            onChange={handleOnChange(setWDeckStrat)}
            required
          />
          <MultiSelectDropDown
            label="Mana"
            value={wdeckcolor}
            onChange={handleOnChange(setWDeckColor)}
            required={true}
          />
        </Stack>
        <Stack sx={{ pl: 3, pr: 3 }}>
          <TextField
            id="outlined-basic"
            label="Loser"
            variant="outlined"
            value={loser1}
            onChange={handleOnChange(setLoser1)}
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Deck Strategy"
            variant="outlined"
            value={l1deckstrat}
            onChange={handleOnChange(setL1DeckStrat)}
            required
          />
          <MultiSelectDropDown
            label="Mana"
            value={l1deckcolor}
            onChange={handleOnChange(setL1DeckColor)}
            required={true}
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="remaining life"
            variant="outlined"
            value={remaininglife}
            onChange={handleOnChange(setRemainingLife)}
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="length"
            variant="outlined"
            value={length}
            onChange={handleOnChange(setLength)}
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="date-textfield"
            type="date"
            // defaultValue={currentDate}
            value={date}
            onChange={handleOnChange(setDate)}
            required
          />
          <Button sx={{ mt: 3 }} variant="contained" onClick={() => handleAddButtonClick(anchor)}>
            Add
          </Button>
        </Stack>
      </List>
    </Box>
  )

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
                        {'Add Game'}
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
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message={snackbarMessage} />
    </Paper>
  )
}

export default CustomToolbar
