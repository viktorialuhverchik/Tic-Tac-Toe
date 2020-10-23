import { GameActionTypes, GameState, UPDATE_BOARD, UPDATE_WINNING_MOVES, USER_MOVE } from '../types';

const initialState: GameState = {
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
    userMoves: []
};

export const gameReducer = (state = initialState, action: GameActionTypes) => {
    switch (action.type) {
        case USER_MOVE:
            state.userMoves.push(action.userMove);
            return { ...state, userMoves: state.userMoves };
        case UPDATE_WINNING_MOVES:
            let updatedWinningMoves = state.winningMoves.map((moves: any) => {
                moves[action.square.value] = moves[action.square.value].filter((move: any) => move !== action.square.id);
                return moves;
            });
            return { ...state, winningMoves: updatedWinningMoves };
        case UPDATE_BOARD:
            return { ...state, board: action.board };
        default: 
            return state;
    };
};
