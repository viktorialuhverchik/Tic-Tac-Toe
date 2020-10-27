import { Square } from "../../types";
import {
    AppActionTypes,
    GameActionTypes,
    TOGGLE_USER_FIRST,
    USER_MOVE,
    UPDATE_BOARD,
    SET_WINNER,
    INIT_GAME
} from "../types";

export const toggleUserFirst = (isUserFirst: boolean): AppActionTypes => ({
    type: TOGGLE_USER_FIRST,
    isUserFirst
});

export const addUserMove = (square: Square): GameActionTypes => ({
    type: USER_MOVE,
    square
});

export const updateBoard = (square: Square) => ({
    type: UPDATE_BOARD,
    square
});

export const setWinner = (winner: string): GameActionTypes => ({
    type: SET_WINNER,
    winner
});

export const initGame = (): GameActionTypes => ({
    type: INIT_GAME
});
