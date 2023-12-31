import { GamesMap } from '../models/models'
import mtgBanner from '../img/mtg.png'
import fbBanner from '../img/fb.png'
import golfBanner from '../img/golf.png'
import discGolfBanner from '../img/discgolf.png'
import pickleballBanner from '../img/pickleball.png'
// import fitBanner from '../img/fit.png'
// import marchMadnessBanner from '../img/march-madness.png'
// import cornHoleBanner from '../img/cornhole.png'

export const GameInfoMap: GamesMap = {
  MagicTheGathering: {
    key: 'MagicTheGathering',
    PageName: 'Magic The Gathering',
    gameCardDescription:
      'Magic the Gathering Leaderboards, where legends are forged and destinies are sealed with every card drawn.',
    gameBanner: mtgBanner,
    childPages: [
      { name: 'Leaderboard', url: 'mtg-leaderboard' },
      { name: 'History', url: 'mtg-game-history' }
    ],
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
    LeaderboardColumns: [
      { key: 'rank', name: 'Rank' },
      { key: 'name', name: 'Name' },
      { key: 'ratio', name: 'W/L Ratio' },
      { key: 'wins', name: 'Wins' },
      { key: 'losses', name: 'Losses' }
    ],
    //SoloLeaderboardColumnNames: [],
    PlayersList: ['Bryan', 'Morgan', 'Justin', 'Nick', 'Jeff', 'Lucas', 'Tye'],
    loc: 0
  },
  Foosball: {
    key: 'Foosball',
    PageName: 'Foosball',
    gameCardDescription:
      'Foosball leaderboards are a dynamic and competitive arena for enthusiasts of the game from various corners of the company.',
    gameBanner: fbBanner,
    childPages: [
      { name: 'Leaderboard', url: 'foosball-leaderboard' },
      { name: 'History', url: 'foosball-game-history' }
    ],
    GameHistoryColumns: [
      { key: 'Date', name: 'Date' },
      { key: 'Winner', name: 'Winner(s)' },
      { key: 'Loser', name: 'Loser(s)' }
    ],
    LeaderboardColumns: [
      { key: 'Rank', name: 'Rank' },
      { key: 'Name', name: 'Name' },
      { key: 'Ratio', name: 'W/L Ratio' },
      { key: 'Wins', name: 'Wins' },
      { key: 'Losses', name: 'Losses' }
    ],
    //SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
    //TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
    PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred'],
    loc: 1
  },
  Golf: {
    key: 'Golf',
    PageName: 'Golf',
    gameCardDescription:
      'Foosball leaderboards are a dynamic and competitive arena for enthusiasts of the game from various corners of the company.',
    gameBanner: golfBanner,
    childPages: [
      { name: 'Leaderboard', url: 'golf-leaderboard' },
      { name: 'History', url: 'golf-game-history' },
      { name: 'Scorecard', url: 'golf-scorecard' }
    ],
    GameHistoryColumns: [
      { key: 'Date', name: 'Date' },
      { key: 'Winner', name: 'Winner(s)' },
      { key: 'Loser', name: 'Loser(s)' }
    ],
    LeaderboardColumns: [
      { key: 'Rank', name: 'Rank' },
      { key: 'Name', name: 'Name' },
      { key: 'Ratio', name: 'W/L Ratio' },
      { key: 'Wins', name: 'Wins' },
      { key: 'Losses', name: 'Losses' }
    ],
    //SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
    //TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
    PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred'],
    loc: 2
  },
  DiscGolf: {
    key: 'DiscGolf',
    PageName: 'Disc Golf',
    gameCardDescription:
      'Foosball leaderboards are a dynamic and competitive arena for enthusiasts of the game from various corners of the company.',
    gameBanner: discGolfBanner,
    childPages: [
      { name: 'Leaderboard', url: 'foosball-leaderboard' },
      { name: 'History', url: 'foosball-game-history' }
    ],
    GameHistoryColumns: [
      { key: 'Date', name: 'Date' },
      { key: 'Winner', name: 'Winner(s)' },
      { key: 'Loser', name: 'Loser(s)' }
    ],
    LeaderboardColumns: [
      { key: 'Rank', name: 'Rank' },
      { key: 'Name', name: 'Name' },
      { key: 'Ratio', name: 'W/L Ratio' },
      { key: 'Wins', name: 'Wins' },
      { key: 'Losses', name: 'Losses' }
    ],
    //SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
    //TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
    PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred'],
    loc: 3
  },
  PickleBall: {
    key: 'PickleBall',
    PageName: 'PickleBall',
    gameCardDescription:
      'Foosball leaderboards are a dynamic and competitive arena for enthusiasts of the game from various corners of the company.',
    gameBanner: pickleballBanner,
    childPages: [
      { name: 'Leaderboard', url: 'foosball-leaderboard' },
      { name: 'History', url: 'foosball-game-history' }
    ],
    GameHistoryColumns: [
      { key: 'Date', name: 'Date' },
      { key: 'Winner', name: 'Winner(s)' },
      { key: 'Loser', name: 'Loser(s)' }
    ],
    LeaderboardColumns: [
      { key: 'Rank', name: 'Rank' },
      { key: 'Name', name: 'Name' },
      { key: 'Ratio', name: 'W/L Ratio' },
      { key: 'Wins', name: 'Wins' },
      { key: 'Losses', name: 'Losses' }
    ],
    //SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
    //TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
    PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred'],
    loc: 4
  }
  // MarchMadness: {
  //   key: 'MarchMadness',
  //   PageName: 'March Madness',
  //   gameCardDescription:
  //     'March Madness, where basketball dreams take center stage, and champions rise through the ranks with unrivaled passion and strategy.',
  //   gameBanner: marchMadnessBanner,
  //   Pages: [],
  //   LeaderBoardUrl: '',
  //   GameHistoryUrl: '',
  //   DropDownOptions: [],
  //   GameHistoryColumns: [],
  //   LeaderboardColumns: [],
  //   SoloLeaderboardColumnNames: [],
  //   TeamLeaderboardColumnNames: [],
  //   PlayersList: [],
  // loc: 3
  // },
  // Cornhole: {
  //   key: 'Cornhole',
  //   PageName: 'Cornhole',
  //   gameCardDescription:
  //     'Foosball leaderboards are a dynamic and competitive arena for enthusiasts of the game from various corners of the company.',
  //   gameBanner: cornHoleBanner,
  //   Pages: ['Leaderboard', 'History'],
  //   LeaderBoardUrl: 'cornhole-leaderboard',
  //   GameHistoryUrl: 'cornhole-game-history',
  //   DropDownOptions: ['Leaderboard', 'Game History'],
  //   GameHistoryColumns: [
  //     { key: 'Winner', name: 'Winner' },
  //     { key: 'Loser', name: 'Loser' }
  //   ],
  //   LeaderboardColumns: [
  //     { key: 'Rank', name: 'Rank' },
  //     { key: 'Name', name: 'Name' },
  //     { key: 'Ratio', name: 'W/L Ratio' },
  //     { key: 'Wins', name: 'Wins' },
  //     { key: 'Losses', name: 'Losses' }
  //   ],
  //   //SoloLeaderboardColumnNames: ['Rank', 'Name', 'W/L Ratio', 'Wins', 'Losses'],
  //   //TeamLeaderboardColumnNames: ['Rank', 'Team', 'W/L Ratio', 'Wins', 'Losses'],
  //   PlayersList: ['Dusty', 'Chris', 'Justin', 'Bryan', 'Jarred'],
  // loc: 2
  // },
  // FitnessChallenge: {
  //   key: 'FitnessChallenge',
  //   PageName: 'Fitness Challenge',
  //   gameCardDescription:
  //     'This diverse mix of enthusiasts converges on a virtual platform where they unite in their shared pursuit of health and well-being.',
  //   gameBanner: fitBanner,
  //   Pages: ['Leaderboard'],
  //   LeaderBoardUrl: 'fitness-leaderboard',
  //   DropDownOptions: ['Leaderboard'],
  //   LeaderboardColumns: [
  //     { key: 'Rank', name: 'Rank' },
  //     { key: 'Name', name: 'Name' },
  //     { key: 'Points', name: 'Points' }
  //   ],
  //   PlayersList: ['Brandon', 'Justin'],
  //   GameHistoryColumns: [],
  // loc: 4
  // }
}
