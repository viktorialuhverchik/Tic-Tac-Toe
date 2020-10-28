import { appReducer } from './appReducer';
import { gameReducer, initialState } from './gameReducer';

describe('app reducer', () => {

    it('should handle TOGGLE_USER_FIRST', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'TOGGLE_USER_FIRST',
                isUserFirst: true
            }
            ))
            .toEqual({isUserFirst: true});
    });
});

describe('game reducer', () => {

    it('should handle USER_MOVE', () => {
        expect(gameReducer(
            initialState, 
            {
                type: 'USER_MOVE',
                square: {id: 1, value: "X"}
            }
            ))
            .toEqual({ ...initialState, userMoves: [1]});
    });

    it('should handle UPDATE_BOARD', () => {
        expect(gameReducer(
            initialState, 
            {
                type: 'UPDATE_BOARD',
                square: {id: 1, value: "X"}
            }
            ))
            .toEqual({
                winningMoves: [
                    {
                        X: [2, 3],
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
                        X: [5, 9],
                        O: [1, 5, 9]
                    },
                    {
                        X: [3, 5, 7],
                        O: [3, 5, 7]
                    },
                    {
                        X: [4, 7],
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
                            value: "X"
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
            });
    });

    it('should handle UPDATE_BOARD and set winner', () => {
        expect(gameReducer(
            {
                winningMoves: [
                    {
                        X: [1],
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
                        X: [5, 7],
                        O: [3, 5, 7]
                    },
                    {
                        X: [1, 4, 7],
                        O: [1, 4, 7]
                    },
                    {
                        X: [5, 8],
                        O: [2, 5, 8]
                    },
                    {
                        X: [6, 9],
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
                            value: "X"
                        },
                        {
                            id: 3,
                            value: "X"
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
                userMoves: [2, 3],
                winner: ""
            }, 
            {
                type: 'UPDATE_BOARD',
                square: {id: 1, value: "X"}
            }
            ))
            .toEqual({
                winningMoves: [
                    {
                        X: [],
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
                        X: [5, 9],
                        O: [1, 5, 9]
                    },
                    {
                        X: [5, 7],
                        O: [3, 5, 7]
                    },
                    {
                        X: [4, 7],
                        O: [1, 4, 7]
                    },
                    {
                        X: [5, 8],
                        O: [2, 5, 8]
                    },
                    {
                        X: [6, 9],
                        O: [3, 6, 9]
                    }
                ],
                board: [
                    [
                        {
                            id: 1,
                            value: "X"
                        },
                        {
                            id: 2,
                            value: "X"
                        },
                        {
                            id: 3,
                            value: "X"
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
                userMoves: [2, 3],
                winner: "X win!"
            });
    });

    it('should handle SET_WINNER', () => {
        expect(gameReducer(
            initialState, 
            {
                type: 'SET_WINNER',
                winner: "Tie!"
            }
            ))
            .toEqual({ ...initialState, winner: "Tie!"});
    });
});