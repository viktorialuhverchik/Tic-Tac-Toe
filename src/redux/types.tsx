import { Square } from "../types";

export const TOGGLE_USER_FIRST = "TOGGLE_USER_FIRST";
export const USER_MOVE = "USER_MOVE";
export const UPDATE_BOARD = "UPDATE_BOARD";

export interface AppState {
    isUserFirst: boolean
};

export interface GameState {
    moves: number[],
    userMoves: number[]
};

interface ToggleUserFirst {
    type: typeof TOGGLE_USER_FIRST,
    isUserFirst: boolean
};

interface AddUserMove {
    type: typeof USER_MOVE,
    userMove: number
};

interface UpdateBoard {
    type: typeof UPDATE_BOARD,
    board: Array<Array<Square>>
}

export type AppActionTypes = ToggleUserFirst;
export type GameActionTypes = AddUserMove | UpdateBoard;
