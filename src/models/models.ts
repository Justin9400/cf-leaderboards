export enum Games {
  MagicTheGathering = 'MagicTheGathering',
  Foosball = 'Foosball',
  MarchMadness = 'MarchMadness',
  FitnessChallenge = 'FitnessChallenge'
}

export type Game = {
  key: keyof typeof Games;
  PageName: string;
  Pages: string[];
  LeaderBoardUrl: string;
  GameHistoryUrl?: string;
  DropDownOptions: string[];
  LeaderboardColumnNames?: string[];
  SoloLeaderboardColumnNames?: string[];
  TeamLeaderboardColumnNames?: string[];
  GameHistoryColumnNames?: string[];
  PlayersList: string[];
};

export type GamesMap = {
  [key in Games]: Game;
};
