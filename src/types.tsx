export interface Square {
    id: number,
    value: string
}

export interface State {
    app: {
        isUserFirst: boolean
    },
    game: {
        moves: number[],
        // board: Array<Array<Square>>,
        userMoves: number[]
    }
}

export interface PropsGame {
    isUserFirst: boolean,
    moves: number[],
    // board: Array<Array<Square>>,
    userMoves: number[]
}

export interface PropsButtons {
    userMoves: number[]
}
