import { Stack } from "@mui/system";
import Leaderboard from "../../components/leaderboard/leaderboard";
import { GameInfoMap } from "../../maps/GameInfoMap";
import React from "react";
import { Paper } from "@mui/material";
import AddGameForm from "../../components/add-game-form/AddGameForm";

function MTGGameHistory() {
    return (
        <Stack sx={{display: 'flex', height: '100vh', margin: '0 auto'}}>
            <AddGameForm/>
            <h1 style={{margin:'5% auto', fontFamily: 'Arial, Helvetica, sans-serif'}}>Magic The Gathering Game History</h1>
            <Paper>
            <Leaderboard game={GameInfoMap.MagicTheGathering} pageName="History"/>
            </Paper>
        </Stack>
    );
}

export default MTGGameHistory;