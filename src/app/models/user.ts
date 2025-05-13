export interface User {
    username: string;
    password: string;
    totalGamesPlayed: number;
    gamesWon: number;
    totalQuestionsAnswered: number;
    questionsAnsweredCorrectly: number;
    bestCategory: string;
    worstCategory: string;
}