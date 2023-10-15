import * as React from 'react';
import { Grow, Paper, Popper, MenuList, ButtonGroup, Button, ClickAwayListener } from '@mui/material';
import { Game } from '../../models/models';

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export type ISplitButtonProps = {
  game: Game
  href: string
}

export default function SplitButton(props: ISplitButtonProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleClick = (page: string) => {
  //   const selectedOption = options[selectedIndex];
  //   const url = `/target-page/${selectedOption}`;
  //   // history.push(url); 
  // };

  // const handleMenuItemClick = (
  //   event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  //   index: number,
  // ) => {
  //   setSelectedIndex(index);
  //   setOpen(false);
  // };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        {/* <Button onClick={() => handleClick(props.href)}>{props.game.PageName}</Button> */}
        <Button onClick={handleToggle}>{props.game.PageName}</Button>
        {/* <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button> */}
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {/* {props.game.DropDownOptions.map((dropDownOption) => (
                    <MenuItem
                    // key={option}
                    // disabled={index === 2}
                    // selected={index === selectedIndex}
                    // onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {dropDownOption}
                  </MenuItem>
                  ))} */}
                  {props.game.DropDownOptions.map((dropDownOption) => (
                    <Button
                      key={dropDownOption}
                      href={dropDownOption === 'Leaderboard' ? `${props.game.LeaderBoardUrl}` : `${props.game.GameHistoryUrl}`}
                      sx={{
                        fontSize: "14px",
                        // my: 2,
                        color: "black",
                        display: "block",
                        // mx: 2,
                      }}
                    >
                    {dropDownOption}
                  </Button>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}