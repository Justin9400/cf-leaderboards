import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";
import { Button } from "@mui/base";

function MTG() {
    return (
        <>
            <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
                <h1 style={{margin:'5% auto'}}>Magic The Gathering Leaderboard</h1>
                <Leaderboard pageName={GameInfoMap.MagicTheGathering}/>
            </Stack>
            <Button />
        </>
        
    );
}

export default MTG;