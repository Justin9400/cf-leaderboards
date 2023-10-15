import { GamesMap } from "../models/models";

export const GameInfoMap: GamesMap = {
    MagicTheGathering: {
        key: 'MagicTheGathering',
        PageName: 'Magic The Gathering',
        LeaderBoardUrl: 'mtg-leaderboard',
        GameHistoryUrl: 'mtg-game-history',
        DropDownOptions: ['Leaderboard', 'Game History'],
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses', 'Losses'],
        GameHistoryColumnNames: ['Winner', 'Deck Strategy', 'Mana Color(s)', "Loser", 'Deck Strategy', 'Mana Color(s)', 'Remaining Health', 'Duration'],
        PlayersList: ['Bryan', 'Morgan', 'Justin', 'Nick', 'Jeff', 'Lucas', 'Tye']
    },
    Foosball: {
        key: 'Foosball',
        PageName: 'Foosball',
        LeaderBoardUrl: 'Foosball-leaderboard',
        GameHistoryUrl: 'Foosball-game-history',
        DropDownOptions: ['Leaderboard', 'Game History'],
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
        TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
        GameHistoryColumnNames: ['Winner', "Loser"],
        PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred']
    },
    FitnessChallenge: {
        key: 'FitnessChallenge',
        PageName: 'Fitness Challenge',
        LeaderBoardUrl: 'Fitness-leaderboard',
        DropDownOptions: ['Leaderboard'],
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'Total Minutes'],
        PlayersList: ['Brandon', 'Justin']
    }
}