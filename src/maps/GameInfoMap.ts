import { GamesMap } from "../models/models";

export const GameInfoMap: GamesMap = {
    MagicTheGathering: {
        key: 'MagicTheGathering',
        PageName: 'Magic The Gathering',
        Pages: ['Leaderboard', 'History'],
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
        Pages: ['Leaderboard', 'History'],
        LeaderBoardUrl: 'Foosball-leaderboard',
        GameHistoryUrl: 'Foosball-game-history',
        DropDownOptions: ['Leaderboard', 'Game History'],
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
        TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
        GameHistoryColumnNames: ['Winner', "Loser"],
        PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred']
    },
    MarchMadness: {
        key: 'MarchMadness',
        PageName: 'MarchMadness',
        Pages: ['Leaderboard', 'Bracket'],
        LeaderBoardUrl: 'MarchMadness-leaderboard',
        GameHistoryUrl: 'MarchMadness-bracket',
        DropDownOptions: ['Leaderboard', 'Bracket'],
        SoloLeaderboardColumnNames: ['Rank', 'Name', 'Wins', 'Losses'],
        GameHistoryColumnNames: ['Winner', "Loser"],
        PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred']
    },
    FitnessChallenge: {
        key: 'FitnessChallenge',
        PageName: 'Fitness Challenge',
        Pages: ['Leaderboard'],
        LeaderBoardUrl: 'Fitness-leaderboard',
        DropDownOptions: ['Leaderboard'],
        LeaderboardColumnNames: ['Rank', 'Name', 'Total Minutes'],
        PlayersList: ['Brandon', 'Justin']
    }
}