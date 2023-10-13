import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import logo from '../../img/full_logo.svg'

function MTG() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
              <img src={logo} alt="Magic The Gathering Logo" style={{ margin: '0 auto', paddingTop: 10, marginTop: 3, width: '400px', height: 'auto' }} />
            <h1 style={{margin:'5% auto'}}>Leaderboard</h1>
            <Leaderboard/>
        </Stack>
    );
}

export default MTG;