import { GamesMap } from "../models/models";

export const GameInfoMap: GamesMap = {
    MagicTheGathering: {
        key: 'MagicTheGathering',
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses', 'Losses'],
        GameHistoryColumnNames: ['Winner', 'Deck Strategy', 'Mana Color(s)', "Loser", 'Deck Strategy', 'Mana Color(s)', 'Remaining Health', 'Duration'],
        PlayersList: ['Bryan', 'Morgan', 'Justin', 'Nick', 'Jeff', 'Lucas', 'Tye']
    },
    Foosball: {
        key: 'Foosball',
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
        TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
        GameHistoryColumnNames: ['Winner', "Loser"],
        PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred']
    },
    Fitness: {
        key: 'Fitness',
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'Total Minutes'],
        PlayersList: ['Brandon', 'Justin']
    }
}