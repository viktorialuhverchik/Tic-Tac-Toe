export interface Square {
    id: number,
    value: string
}

export interface State {
    app: {
        isUserFirst: boolean
    },
    game: {
        winningMoves: any,
        board: Array<Array<Square>>,
        userMoves: number[]
    }
}

export interface PropsGame {
    isUserFirst: boolean,
    winningMoves: any,
    board: Array<Array<Square>>,
    userMoves: number[]
}

export interface PropsButtons {
    userMoves: number[]
}
