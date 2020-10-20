import {
    AppActionTypes,
    GameActionTypes,
    TOGGLE_USER_FIRST,
    USER_MOVE,
    UPDATE_MOVES
} from "../types";

export const toggleUserFirst = (isUserFirst: boolean): AppActionTypes => ({
    type: TOGGLE_USER_FIRST,
    isUserFirst
});

export const addUserMove = (userMove: number): GameActionTypes => ({
    type: USER_MOVE,
    userMove
});

export const updateMoves = (moves: number[], move: number): GameActionTypes => {
    let updatedMoves: number[] = moves.filter((item: number) => move !== item);
    return {
        type: UPDATE_MOVES,
        moves: updatedMoves
    };
};
