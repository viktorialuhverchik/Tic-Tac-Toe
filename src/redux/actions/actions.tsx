import { Square } from "../../types";
import {
    AppActionTypes,
    GameActionTypes,
    TOGGLE_USER_FIRST,
    USER_MOVE,
    UPDATE_WINNING_MOVES,
    UPDATE_BOARD
} from "../types";

export const toggleUserFirst = (isUserFirst: boolean): AppActionTypes => ({
    type: TOGGLE_USER_FIRST,
    isUserFirst
});

export const addUserMove = (userMove: number): GameActionTypes => ({
    type: USER_MOVE,
    userMove
});

export const updateWinningMoves = (square: any): GameActionTypes => ({
    type: UPDATE_WINNING_MOVES,
    square
});

export const updateBoard = (board: Array<Array<Square>>) => ({
    type: UPDATE_BOARD,
    board
});
