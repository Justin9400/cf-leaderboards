import { Stack } from "@mui/system";
import { GameInfoMap } from "../../maps/GameInfoMap";
import { supabase } from "../../supabaseClient";
import GTable from "../../components/GTable/GTable";

let { data, error } = await supabase
  .from('vw_mtgleaderboard')
  .select('*');
  if (error) console.log("error", error);

function MTGLeaderBoard() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto', fontFamily: 'Arial, Helvetica, sans-serif'}}>Magic The Gathering Leaderboard</h1>
            <GTable columns={GameInfoMap.MagicTheGathering.LeaderboardColumns} data={data}/>
        </Stack>
    );
}

export default MTGLeaderBoard
