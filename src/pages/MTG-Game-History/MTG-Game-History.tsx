import { Stack } from "@mui/system";
import { GameInfoMap } from "../../maps/GameInfoMap";
import { supabase } from "../../supabaseClient";
import { IMtgGameHistory } from "../../models/models";
import DataTable from "../../components/data-table/DataTable";
import { useState } from "react";
import Brandon from "../../components/mtgcard/Brandon";
import Justin from "../../components/mtgcard/Justin";
import CustomToolbar from "../../components/toolbar/CustomToolbar";
import jk from '../../img/mtgplayers/jk.png'
import bc from '../../img/mtgplayers/bc.png'


let mtgGameHistory: IMtgGameHistory[] = [];

let { data: mtgGameHistoryDB, error } = await supabase
  .from('vw_currentmtggames')
  .select('*');
  if (error) console.log("error", error);
  else mtgGameHistory = mtgGameHistoryDB as IMtgGameHistory[];

function MTGGameHistory() {
    const [isHoveredJustin, setIsHoveredJustin] = useState(false)
    const [isHoveredBrandon, setIsHoveredBrandon] = useState(false)
  
    const handleMouseEnterJustin = () => {
      setIsHoveredJustin(true)
    }
  
    const handleMouseLeaveJustin = () => {
      setIsHoveredJustin(false)
    }
  
    const handleMouseEnterBrandon = () => {
      setIsHoveredBrandon(true)
    }
  
    const handleMouseLeaveBrandon = () => {
      setIsHoveredBrandon(false)
    }
  
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

        <DataTable columns={GameInfoMap.MagicTheGathering.GameHistoryColumns} data={mtgGameHistory}/>
    </Stack>
    );
}

export default MTGGameHistory;