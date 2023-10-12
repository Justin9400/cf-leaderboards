import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";

function MTG() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto'}}>Magic The Gathering Leaderboard</h1>
            <Leaderboard/>
        </Stack>
    );
}

export default MTG;