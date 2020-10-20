import { GameActionTypes, GameState, UPDATE_MOVES, USER_MOVE } from '../types';

const initialState: GameState = {
    moves: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    userMoves: []
};

export const gameReducer = (state = initialState, action: GameActionTypes) => {
    switch (action.type) {
        case USER_MOVE:
            state.userMoves.push(action.userMove);
            return { ...state, userMoves: state.userMoves };
        case UPDATE_MOVES:
            return { ...state, moves: action.moves };
        default: 
            return state;
    };
};
