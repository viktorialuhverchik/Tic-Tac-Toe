import { Square, WinningMove } from "../types";

export const TOGGLE_USER_FIRST = "TOGGLE_USER_FIRST";
export const USER_MOVE = "USER_MOVE";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const INIT_GAME = "INIT_GAME";
export const SET_TIE = "SET_TIE";

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
    square: Square
};

interface UpdateBoard {
    type: typeof UPDATE_BOARD,
    square: Square
}

interface SetTie {
    type: typeof SET_TIE
}

interface InitGAme {
    type: typeof INIT_GAME
}

export type AppActionTypes = ToggleUserFirst;
export type GameActionTypes = AddUserMove | UpdateBoard | SetTie | InitGAme;
