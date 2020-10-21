import { Square } from "../../types";
import {
    AppActionTypes,
    GameActionTypes,
    TOGGLE_USER_FIRST,
    USER_MOVE,
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

export const updateBoard = (board: Array<Array<Square>>) => ({
    type: UPDATE_BOARD,
    board
});
