export enum Games {
  MagicTheGathering = 'MagicTheGathering',
  Foosball = 'Foosball'
  // MarchMadness = 'MarchMadness',
  // FitnessChallenge = 'FitnessChallenge',
  // Cornhole = 'Cornhole'
}

export type Game = {
  key: keyof typeof Games
  PageName: string
  gameCardDescription: string
  gameBanner: string
  Pages: string[]
  LeaderBoardUrl: string
  GameHistoryUrl?: string
  DropDownOptions: string[]
  GameHistoryColumns: ColumnData[]
  LeaderboardColumns: ColumnData[]
  SoloLeaderboardColumnNames?: ColumnData[]
  TeamLeaderboardColumnNames?: ColumnData[]
  PlayersList: string[]
  loc: number
}

export type GamesMap = {
  [key in Games]: Game
}

export type ColumnData = {
  key: string
  name: string
}

export interface IMtgGameHistory {
  id: number
  Winner: string
  WDeckStrat?: string
  WDeckColor?: string[]
  Loser1: string
  L1DeckStrat?: string
  L1DeckColor?: string[]
  Loser2?: string
  L2DeckStrat?: string
  L2DeckColor?: string[]
  Loser3?: string
  L3DeckStrat?: string
  L3DeckColor?: string[]
  remainingLife?: number
  length?: number
  Date: Date
}

export interface IFoosballGameHistory {
  id: number
  Winner: string[]
  Loser: string[]
  Date: Date
}
