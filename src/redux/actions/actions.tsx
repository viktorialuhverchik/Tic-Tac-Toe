import { Square } from "../../types";
import {
    AppActionTypes,
    GameActionTypes,
    TOGGLE_USER_FIRST,
    USER_MOVE,
    UPDATE_WINNING_MOVES,
    UPDATE_BOARD,
    SET_WINNER,
    INIT_GAME
} from "../types";

export const toggleUserFirst = (isUserFirst: boolean): AppActionTypes => ({
    type: TOGGLE_USER_FIRST,
    isUserFirst
});

export const addUserMove = (userMove: number): GameActionTypes => ({
    type: USER_MOVE,
    userMove
});

export const updateWinningMoves = (square: Square) => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE_WINNING_MOVES,
            square
        });
    }
};
export const updateBoard = (square: Square) => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE_BOARD,
            square
        });
    }
};

export const setWinner = (winner: string): GameActionTypes => ({
    type: SET_WINNER,
    winner
});

export const initGame = (): GameActionTypes => ({
    type: INIT_GAME
});
