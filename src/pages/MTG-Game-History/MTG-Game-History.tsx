import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { Paper } from '@mui/material';
import Leaderboard from '../../components/leaderboard/leaderboard';
import { GameInfoMap } from '../../maps/GameInfoMap';
import CustomToolbar from '../../components/toolbar/CustomToolbar';
import Justin from '../../components/mtgcard/Justin';
import Brandon from '../../components/mtgcard/Brandon';
import jk from '../../img/mtgplayers/jk.png';
import bc from '../../img/mtgplayers/bc.png';

function MTGGameHistory() {
  const [isHoveredJustin, setIsHoveredJustin] = useState(false);
  const [isHoveredBrandon, setIsHoveredBrandon] = useState(false);

  const handleMouseEnterJustin = () => {
    setIsHoveredJustin(true);
  };

  const handleMouseLeaveJustin = () => {
    setIsHoveredJustin(false);
  };

  const handleMouseEnterBrandon = () => {
    setIsHoveredBrandon(true);
  };

  const handleMouseLeaveBrandon = () => {
    setIsHoveredBrandon(false);
  };

  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        Magic The Gathering Game History
      </h1>
      <Stack direction="row">
        <div
          onMouseEnter={handleMouseEnterJustin}
          onMouseLeave={handleMouseLeaveJustin}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={jk} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredJustin && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <Justin />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterBrandon}
          onMouseLeave={handleMouseLeaveBrandon}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={bc} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredBrandon && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <Brandon />
            </div>
          )}
        </div>
      </Stack>

      <CustomToolbar />

      <Paper>
        <Leaderboard game={GameInfoMap.MagicTheGathering} pageName="History" />
      </Paper>
    </Stack>
  );
}

export default MTGGameHistory;
