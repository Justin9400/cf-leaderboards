import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";

function FoosballLeaderBoard() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto'}}>Foosball Game History</h1>
            <Stack direction="row" spacing={10}>
                <Leaderboard pageName={GameInfoMap.Foosball}/>
                <Leaderboard pageName={GameInfoMap.Foosball}/>
            </Stack>
            {/* <Leaderboard pageName={GameInfoMap.Foosball}/> */}

        </Stack>
    );
}

export default FoosballLeaderBoard;