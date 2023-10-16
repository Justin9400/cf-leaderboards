import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";

function MTGLeaderBoard() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto', fontFamily: 'Arial, Helvetica, sans-serif'}}>Magic The Gathering Leaderboard</h1>
            <Leaderboard game={GameInfoMap.MagicTheGathering} pageName="Leaderboard"/>
        </Stack>
    );
}

export default MTGLeaderBoard;