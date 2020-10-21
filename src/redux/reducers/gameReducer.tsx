import { GameActionTypes, GameState, UPDATE_BOARD, USER_MOVE } from '../types';

const initialState: GameState = {
    // board: [
    //     [
    //         {
    //             id: 1,
    //             value: ""
    //         },
    //         {
    //             id: 2,
    //             value: ""
    //         },
    //         {
    //             id: 3,
    //             value: ""
    //         }
    //     ],
    //     [
    //         {
    //             id: 4,
    //             value: ""
    //         },
    //         {
    //             id: 5,
    //             value: ""
    //         },
    //         {
    //             id: 6,
    //             value: ""
    //         }
    //     ],
    //     [
    //         {
    //             id: 7,
    //             value: ""
    //         },
    //         {
    //             id: 8,
    //             value: ""
    //         },
    //         {
    //             id: 9,
    //             value: ""
    //         }
    //     ]
    // ],
    moves: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    userMoves: []
};

export const gameReducer = (state = initialState, action: GameActionTypes) => {
    switch (action.type) {
        case USER_MOVE:
            state.userMoves.push(action.userMove);
            return { ...state, userMoves: state.userMoves };
        case UPDATE_BOARD:
            return { ...state, board: action.board };
        default: 
            return state;
    };
};
