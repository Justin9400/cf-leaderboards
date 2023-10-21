import { GamesMap } from "../models/models";

export const GameInfoMap: GamesMap = {
    MagicTheGathering: {
        key: 'MagicTheGathering',
        PageName: 'Magic The Gathering',
        Pages: ['Leaderboard', 'History'],
        LeaderBoardUrl: 'mtg-leaderboard',
        GameHistoryUrl: 'mtg-game-history',
        DropDownOptions: ['Leaderboard', 'Game History'],
        GameHistoryColumns: [
            { key: 'Date', name: 'Date' },
            { key: 'Winner', name: 'Winner' },
            { key: 'WDeckStrat', name: 'Deck Strategy' },
            { key: 'WDeckColor', name: 'Mana Color(s)' },
            { key: 'Loser1', name: 'Loser' },
            { key: 'L1DeckStrat', name: 'Deck Strategy' },
            { key: 'L1DeckColor', name: 'Mana Color(s)' },
            { key: 'remainingLife', name: 'Remaining Life' },
            { key: 'length', name: 'Length' }
        ],
        LeaderboardColumns: [{key: 'rank', name:'Rank'}, {key:'name', name:'Name'},{key:'ratio', name:'W/L Ratio'}, {key:'wins', name:'Wins'}, {key:'losses', name:'Losses'}],
        //SoloLeaderboardColumnNames: [],
        PlayersList: ['Bryan', 'Morgan', 'Justin', 'Nick', 'Jeff', 'Lucas', 'Tye'],
    },
    Foosball: {
        key: 'Foosball',
        PageName: 'Foosball',
        Pages: ['Leaderboard', 'History'],
        LeaderBoardUrl: 'foosball-leaderboard',
        GameHistoryUrl: 'foosball-game-history',
        DropDownOptions: ['Leaderboard', 'Game History'],
        GameHistoryColumns: [{ key: 'Winner', name: 'Winner' }, { key: "Loser", name: "Loser" }],
        LeaderboardColumns: [{key: 'Rank', name:'Rank'}, {key:'Name', name:'Name'},{key:'Ratio', name:'W/L Ratio'}, {key:'Wins', name:'Wins'}, {key:'Losses', name:'Losses'}],
        //SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
        //TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
        PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred'],
    },
    Cornhole: {
        key: 'Cornhole',
        PageName: 'Cornhole',
        Pages: ['Leaderboard', 'History'],
        LeaderBoardUrl: 'cornhole-leaderboard',
        GameHistoryUrl: 'cornhole-game-history',
        DropDownOptions: ['Leaderboard', 'Game History'],
        GameHistoryColumns: [{ key: 'Winner', name: 'Winner' }, { key: "Loser", name: "Loser" }],
        LeaderboardColumns: [{key: 'Rank', name:'Rank'}, {key:'Name', name:'Name'},{key:'Ratio', name:'W/L Ratio'}, {key:'Wins', name:'Wins'}, {key:'Losses', name:'Losses'}],
        //SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
        //TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
        PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred'],
    },
    FitnessChallenge: {
        key: 'FitnessChallenge',
        PageName: 'Fitness Challenge',
        Pages: ['Leaderboard'],
        LeaderBoardUrl: 'fitness-leaderboard',
        DropDownOptions: ['Leaderboard'],
        LeaderboardColumns: [{key: 'Rank', name:'Rank'}, {key:'Name', name:'Name'}, {key:'Points', name:'Points'}],
        PlayersList: ['Brandon', 'Justin'],
        GameHistoryColumns: []
    }
}