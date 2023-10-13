import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";

function Fitness() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto'}}>Fitness</h1>
            <Leaderboard pageName={GameInfoMap.Fitness}/>
        </Stack>
    );
}

export default Fitness;