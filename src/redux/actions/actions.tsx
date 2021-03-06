import { Square } from "../../types";
import {
    AppActionTypes,
    GameActionTypes,
    TOGGLE_USER_FIRST,
    USER_MOVE,
    UPDATE_BOARD,
    SET_TIE,
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

export const updateBoard = (square: Square): GameActionTypes => ({
    type: UPDATE_BOARD,
    square
});

export const setTie = (): GameActionTypes => ({
    type: SET_TIE
});

export const initGame = (): GameActionTypes => ({
    type: INIT_GAME
});
