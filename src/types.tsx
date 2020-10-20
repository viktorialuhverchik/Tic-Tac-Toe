export interface State {
    app: {
        isUserFirst: boolean
    },
    game: {
        moves: number[],
        userMoves: number[]
    }
}

export interface PropsGame {
    isUserFirst: boolean
}

export interface PropsBoard {
    isUserFirst: boolean
}
