import {
    GameActionTypes,
    GameState,
    INIT_GAME,
    SET_TIE,
    UPDATE_BOARD,
    USER_MOVE
} from '../types';
import { Square, WinningMove } from '../../types';
import { copyUpdatedBoard, copyUpdatedWinningMoves, getWinner } from '../actions/helpers';

export const initialState: GameState = {
    winningMoves: [
        {
            X: [1, 2, 3],
            O: [1, 2, 3]
        },
        {
            X: [4, 5, 6],
            O: [4, 5, 6]
        },
        {
            X: [7, 8, 9],
            O: [7, 8, 9]
        },
        {
            X: [1, 5, 9],
            O: [1, 5, 9]
        },
        {
            X: [3, 5, 7],
            O: [3, 5, 7]
        },
        {
            X: [1, 4, 7],
            O: [1, 4, 7]
        },
        {
            X: [2, 5, 8],
            O: [2, 5, 8]
        },
        {
            X: [3, 6, 9],
            O: [3, 6, 9]
        }
    ],
    board: [
        [
            {
                id: 1,
                value: ""
            },
            {
                id: 2,
                value: ""
            },
            {
                id: 3,
                value: ""
            }
        ],
        [
            {
                id: 4,
                value: ""
            },
            {
                id: 5,
                value: ""
            },
            {
                id: 6,
                value: ""
            }
        ],
        [
            {
                id: 7,
                value: ""
            },
            {
                id: 8,
                value: ""
            },
            {
                id: 9,
                value: ""
            }
        ]
    ],
    userMoves: [],
    winner: ""
};

export const gameReducer = (state = initialState, action: GameActionTypes) => {
    switch (action.type) {
        case USER_MOVE:
            return { ...state, userMoves: [...state.userMoves, action.square.id] };
        case UPDATE_BOARD:
            let updatedBoard: Array<Array<Square>> = copyUpdatedBoard(state.board, action.square);
            let updatedWinningMoves: Array<WinningMove> = copyUpdatedWinningMoves(state.winningMoves, action.square);
            let winner: string = getWinner(updatedWinningMoves, action.square.value);
            return { ...state, board: updatedBoard, winningMoves: updatedWinningMoves, winner };
        case SET_TIE:
            return { ...state, winner: "Tie!"};
        case INIT_GAME:
            return initialState;
        default: 
            return state;
    };
};
