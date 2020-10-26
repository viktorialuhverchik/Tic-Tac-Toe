export interface Square {
    id: number,
    value: string
}

export interface WinningMove {
    X: Array<number>,
    O: Array<number>
}

export interface State {
    app: {
        isUserFirst: boolean
    },
    game: {
        winningMoves: Array<WinningMove>,
        board: Array<Array<Square>>,
        userMoves: number[],
        winner: string
    }
}

export interface PropsGame {
    isUserFirst: boolean,
    winningMoves: Array<WinningMove>,
    board: Array<Array<Square>>
}

export interface PropsButtons {
    userMoves: number[]
}

export interface PropsShowWinner {
    winner: string
}
