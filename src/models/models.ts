export enum Games {
    MagicTheGathering = 'MagicTheGathering',
    Foosball = 'Foosball',
    Fitness = 'Fitness'
}

export type Game = {
    key: keyof typeof Games
    SoloLeaderboardColumnNames?: string[]
    TeamLeaderboardColumnNames?: string[]
    GameHistoryColumnNames?: string[]
    PlayersList: string[]
}

export type GamesMap = {
    [key in Games]: Game
}