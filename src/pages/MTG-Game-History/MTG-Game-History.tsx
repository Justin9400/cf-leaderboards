import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";

function MTGGameHistory() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto'}}>Magic The Gathering Game History</h1>
            <Leaderboard pageName={GameInfoMap.MagicTheGathering}/>
        </Stack>
    );
}

export default MTGGameHistory;