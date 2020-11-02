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

export interface PropsButtons {
    userMoves: number[]
}

export interface PropsGame {
    userMoves: number[],
    winner: string
}

export interface PropsShowWinner {
    winner: string
}

export enum Moves {
    X = "X",
    O = "O"
};
