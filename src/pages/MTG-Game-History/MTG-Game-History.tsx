import { Stack } from "@mui/system";
import { GameInfoMap } from "../../maps/GameInfoMap";
import { supabase } from "../../supabaseClient";
import { IMtgGameHistory } from "../../models/models";
import GTable from "../../components/GTable/GTable";

let mtgGameHistory: IMtgGameHistory[] = [];

let { data: mtgGameHistoryDB, error } = await supabase
  .from('mtgGameHistory')
  .select('*');
  if (error) console.log("error", error);
  else mtgGameHistory = mtgGameHistoryDB as IMtgGameHistory[];

function MTGGameHistory() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto', fontFamily: 'Arial, Helvetica, sans-serif'}}>Magic The Gathering Game History</h1>
            <GTable columns={GameInfoMap.MagicTheGathering.GameHistoryColumns} data={mtgGameHistory}/>
        </Stack>
    );
}

export default MTGGameHistory;