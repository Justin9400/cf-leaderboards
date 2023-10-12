import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";

function Foosball() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'10px auto 10px auto'}}>Foosball Leaderboard</h1>
            <Leaderboard/>
        </Stack>
    );
}

export default Foosball;