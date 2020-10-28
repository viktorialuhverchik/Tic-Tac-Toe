import {
    GameActionTypes,
    GameState,
    INIT_GAME,
    SET_WINNER,
    UPDATE_BOARD,
    USER_MOVE
} from '../types';
import { Square, WinningMove } from '../../types';

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
            let updatedWinningMoves: Array<WinningMove> = state.winningMoves.map((moves: any) => {
                return Object.assign({}, moves, {
                    [action.square.value]: moves[action.square.value].filter((move: number) => move !== action.square.id)
                });
            });

            let updatedBoard: Array<Array<Square>> = state.board.map((row: Array<Square>) => row.map((square: Square) => {
                if (action.square.id === square.id) {
                    return Object.assign({}, action.square);
                }
                return square;
            }));
            let winner;
            let isFindWinner = updatedWinningMoves.find((move: any) => move[action.square.value].length === 0);
            if (isFindWinner) {
                winner = `${action.square.value} win!`;
            } else {
                winner = "";
            }
            return { ...state, board: updatedBoard, winningMoves: updatedWinningMoves, winner };
        case SET_WINNER:
            return { ...state, winner: action.winner};
        case INIT_GAME:
            return initialState;
        default: 
            return state;
    };
};
