import React, { useState } from 'react'
import MultiSelectDropDown from '../multi-select-dropdown/MultiSelectDropDown'
import { supabase } from '../../supabaseClient'
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
  Drawer,
  Dialog,
  DialogTitle
} from '@mui/material'
import GavelIcon from '@mui/icons-material/Gavel'
import AddIcon from '@mui/icons-material/Add'

type Anchor = 'right' | 'left'

export const AddGameForm = () => {
  const [winner, setWinner] = useState('')
  const [wdeckstrat, setWDeckStrat] = useState('')
  const [wdeckcolor, setWDeckColor] = useState([])
  const [loser1, setLoser1] = useState('')
  const [l1deckstrat, setL1DeckStrat] = useState('')
  const [l1deckcolor, setL1DeckColor] = useState([])
  const [remaininglife, setRemainingLife] = useState('')
  const [length, setLength] = useState('')
  const [date, setDate] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [toggleDrawerState, setToggleNewGameFormState] = useState({ right: false })
  const [toggleRulesPopup, setToggleRulesPopup] = useState({ right: false })

  const toggleNewGameForm = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') ||
      (event as React.KeyboardEvent).key === 'Shift'
    ) {
      return
    }
    setToggleNewGameFormState({ ...toggleDrawerState, [anchor]: open })
  }

  const toggleRulesPopupMenu = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') ||
      (event as React.KeyboardEvent).key === 'Shift'
    ) {
      return
    }
    setToggleRulesPopup({ ...toggleRulesPopup, [anchor]: open })
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
      setToggleNewGameFormState({ ...toggleDrawerState, [anchor]: false })
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

  const handleCancelClick = (anchor: Anchor) => {
    setToggleNewGameFormState({ ...toggleDrawerState, [anchor]: false })
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  const newGameForm = (anchor: Anchor) => (
    <Box sx={{ width: 800 }} role="permanent">
      <Typography sx={{ pl: 3, pt: 3, fontSize: '18px', fontWeight: '500' }}>Add a MTG game</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List>
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
              <Divider sx={{ mt: 4 }} />
              <TextField
                sx={{ mt: 3 }}
                id="outlined-basic"
                label="Remaining Life"
                variant="outlined"
                value={remaininglife}
                onChange={handleOnChange(setRemainingLife)}
                required
              />
              <TextField
                sx={{ mt: 3 }}
                id="date-textfield"
                type="date"
                value={date}
                onChange={handleOnChange(setDate)}
                required
              />
            </Stack>
          </List>
        </Grid>

        <Grid item xs={6}>
          <Stack sx={{ pt: 4, pl: 3, pr: 3 }}>
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
            <Divider sx={{ mt: 4 }} />
            <TextField
              sx={{ mt: 3 }}
              id="outlined-basic"
              label="Game Length"
              variant="outlined"
              value={length}
              onChange={handleOnChange(setLength)}
              required
            />
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 1, mb: 4, width: '100%' }} />
      <Button sx={{ width: '30%', ml: 3 }} variant="contained" onClick={() => handleAddButtonClick(anchor)}>
        Add Game
      </Button>
      <Button sx={{ width: '30%', ml: 3 }} variant="outlined" onClick={() => handleCancelClick(anchor)}>
        Cancel
      </Button>
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
                      <Button startIcon={<AddIcon />} onClick={toggleNewGameForm(anchor, true)}>
                        {'Add Game'}
                      </Button>
                      <Button startIcon={<GavelIcon />} onClick={toggleRulesPopupMenu(anchor, true)}>
                        {'Rules'}
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={toggleDrawerState[anchor]}
                        onClose={toggleNewGameForm(anchor, false)}
                      >
                        {newGameForm(anchor)}
                      </Drawer>
                      <Dialog onClose={toggleRulesPopupMenu(anchor, false)} open={toggleRulesPopup[anchor]}>
                        <DialogTitle style={{ margin: '0 auto' }}>Rules</DialogTitle>
                        <div style={{ width: '500px', margin: '10px 0px 10px 15px' }}>
                          <ol
                            style={{
                              listStyleType: 'decimal',
                              paddingLeft: '20px',
                              marginTop: '10px',
                              margin: '0 auto',
                              fontFamily: 'Arial, Helvetica, sans-serif'
                            }}
                          >
                            <li style={{ marginBottom: '10px' }}>Buy in is $1</li>
                            <li style={{ marginBottom: '10px' }}>
                              Minimum of 6 games against 3 different people to get ranked
                            </li>
                            <li style={{ marginBottom: '10px' }}>Ranking is based on Win/Loss ratio</li>
                            <li style={{ marginBottom: '10px' }}>
                              Duration and remaining life are optional when adding a new game
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                              First gets the pot at the end of the month to go towards a pack
                            </li>
                          </ol>
                        </div>
                      </Dialog>
                    </React.Fragment>
                  ))}
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />
      </Stack>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message={snackbarMessage} />
    </Paper>
  )
}

export default AddGameForm
