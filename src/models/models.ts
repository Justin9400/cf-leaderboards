export enum Games {
    MagicTheGathering = 'MagicTheGathering',
    Foosball = 'Foosball',
    FitnessChallenge = 'FitnessChallenge'
}

export type Game = {
    key: keyof typeof Games
    PageName: string
    LeaderBoardUrl: string
    GameHistoryUrl?: string
    DropDownOptions: string[]
    SoloLeaderboardColumnNames?: string[]
    TeamLeaderboardColumnNames?: string[]
    GameHistoryColumnNames?: string[]
    PlayersList: string[]
}

export type GamesMap = {
    [key in Games]: Game
}