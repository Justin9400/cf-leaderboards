import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";
import React from "react";
import { Paper } from "@mui/material";

function FoosballLeaderBoard() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <h1 style={{margin:'5% auto', fontFamily: 'Arial, Helvetica, sans-serif'}}>Foosball Leaderboard</h1>
            <Stack direction="row" spacing={10}>\

                <Paper>
                <Leaderboard game={GameInfoMap.Foosball} pageName="Leaderboard"/>
                </Paper>
                <Paper>
                <Leaderboard game={GameInfoMap.Foosball} pageName="Leaderboard"/>
                </Paper>
            </Stack>
            {/* <Leaderboard pageName={GameInfoMap.Foosball}/> */}

        </Stack>
    );
}

export default FoosballLeaderBoard;