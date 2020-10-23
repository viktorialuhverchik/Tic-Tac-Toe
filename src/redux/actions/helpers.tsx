import { Square } from "../../types";
import { updateBoard, updateWinningMoves } from './actions';

const renderBoard = (isUserFirst: boolean, board: Array<Array<Square>>, gameMove: number): Array<Array<Square>> => {
    return board.map((row) => row.map((square) => {
        if (square.id === gameMove) {
            if (isUserFirst) {
                if(!square.value) {
                    square.value = "O";
                }
            } else {
                if(!square.value) {
                    square.value = "X";
                }
            }}
        return square;
    }));
};

const findRowIndex = (gameMove: number) => {
    return gameMove <= 3 ? 0 : (gameMove > 3 && gameMove <= 6) ? 1 : 2;
}

const findWinningSquare = (board: Array<Array<Square>>, gameMove: number, dispatch: any) => {
    let rowIndex: number = findRowIndex(gameMove);
    let square: any = board[rowIndex].find((square: any) => square.id === gameMove);

    dispatch(updateWinningMoves(square));
};

const checkWinningMoves = (winningMoves: any, symbol: string, board: any) => {
    let foundMove = winningMoves.find((move: any) => move[symbol].length === 1 && !isSquareFull(board, move[symbol][0]));
    return foundMove ? foundMove[symbol][0] : 0;
};

const isSquareFull = (board: Array<Array<Square>>, squareIndex: number): boolean => {
    let rowIndex: number = findRowIndex(squareIndex);
    let square: any = board[rowIndex][squareIndex - rowIndex * 3 - 1];

    return !!square.value;
}

export const generateGameMove = (isUserFirst: boolean, board: Array<Array<Square>>, winningMoves: any, dispatch: any) => {
    let diagonals = [1, 3, 7, 9];
    let cross = [2, 4, 6, 8];
    let symbolGameWinningMoves: string = isUserFirst ? "O" : "X";
    let symbolUserWinningMoves: string = isUserFirst ? "X" : "O";
    let gameMove: number = checkWinningMoves(winningMoves, symbolGameWinningMoves, board);

    if (gameMove !== 0 && !isSquareFull(board, gameMove)) {
        dispatch(updateBoard(renderBoard(isUserFirst, board, gameMove)));
        findWinningSquare(board, gameMove, dispatch);
        return;
    }
    
    gameMove = checkWinningMoves(winningMoves, symbolUserWinningMoves, board);

    if (gameMove !== 0 && !isSquareFull(board, gameMove)) {
        dispatch(updateBoard(renderBoard(isUserFirst, board, gameMove)));
        findWinningSquare(board, gameMove, dispatch);
        return;
    }

    gameMove = Infinity;

    while(gameMove) {
        const index = Math.floor(Math.random() * diagonals.length);
        gameMove = diagonals[index];

        if (gameMove && !isSquareFull(board, gameMove)) {
            dispatch(updateBoard(renderBoard(isUserFirst, board, gameMove)));
            findWinningSquare(board, gameMove, dispatch);
            return;
        } else {
            diagonals.splice(index, 1);
        }
    }

    gameMove = 5;

    if (!isSquareFull(board, gameMove)) {
        dispatch(updateBoard(renderBoard(isUserFirst, board, gameMove)));
        findWinningSquare(board, gameMove, dispatch);
        return;
    }

    while(gameMove) {
        const index = Math.floor(Math.random() * cross.length);
        gameMove = cross[index];

        if (gameMove && !isSquareFull(board, gameMove)) {
            dispatch(updateBoard(renderBoard(isUserFirst, board, gameMove)));
            findWinningSquare(board, gameMove, dispatch);
            return;
        } else {
            cross.splice(index, 1);
        }
    }

    return;
};

export const checkWinner = (winningMoves: any) => {
    // winningMoves.forEach((moves: any) => {
    //     moves["X"].forEach((lines: any) => {
    //         if (!lines.length) {
    //             console.log("win X");
    //         }
    //     });
    // });
    // winningMoves.forEach((moves: any) => {
    //     moves["O"].forEach((lines: any) => {
    //         if (!lines.length) {
    //             console.log("win O");
    //         }
    //     });
    // });
    console.log("check");
};
