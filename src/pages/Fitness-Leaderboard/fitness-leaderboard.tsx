import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";

function FitnessLeaderboard() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto', fontFamily: 'Arial, Helvetica, sans-serif'}}>Fitness</h1>
            <Leaderboard game={GameInfoMap.FitnessChallenge} pageName="Leaderboard"/>
        </Stack>
    );
}

export default FitnessLeaderboard;