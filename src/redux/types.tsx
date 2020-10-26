import { Square, WinningMove } from "../types";

export const TOGGLE_USER_FIRST = "TOGGLE_USER_FIRST";
export const USER_MOVE = "USER_MOVE";
export const UPDATE_WINNING_MOVES = "UPDATE_WINNING_MOVES";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const INIT_GAME = "INIT_GAME";
export const SET_WINNER = "SET_WINNER";

export interface AppState {
    isUserFirst: boolean
};

export interface GameState {
    winningMoves: Array<WinningMove>,
    board: Array<Array<Square>>,
    userMoves: number[],
    winner: string
};

interface ToggleUserFirst {
    type: typeof TOGGLE_USER_FIRST,
    isUserFirst: boolean
};

interface AddUserMove {
    type: typeof USER_MOVE,
    userMove: number
};

// interface UpdateWinningMoves {
//     type: typeof UPDATE_WINNING_MOVES,
//     square: Square
// };

// interface UpdateBoard {
//     type: typeof UPDATE_BOARD,
//     square: Square
// }

interface SetWinner {
    type: typeof SET_WINNER,
    winner: string
}

interface InitGAme {
    type: typeof INIT_GAME
}

export type AppActionTypes = ToggleUserFirst;
export type GameActionTypes = AddUserMove | SetWinner | InitGAme;
