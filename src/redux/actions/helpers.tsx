import { Square } from "../../types";
import { updateWinningMoves } from './actions';

const renderBoard = (isUserFirst: boolean, board: Array<Array<Square>>, gameMove: number) => {
    board.map((row) => row.map((square) => {
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

const findWinningSquare = (board: Array<Array<Square>>, gameMove: number, dispatch: any) => {
    let rowIndex: number = (gameMove <= 3) ? 0 :
            (gameMove > 3 && gameMove <= 6) ? 1 :
            (gameMove > 6) ? 2 :
            3;
    let square: any = board[rowIndex].find((square: any) => {
        if (square.id === gameMove) {
            return square;
        }
    });
    console.log(square);
    dispatch(updateWinningMoves(square));
}

export const generateGameMove = (isUserFirst: boolean, board: Array<Array<Square>>, winningMoves: any, dispatch: any) => {
    let gameMove: number;
    let diagonals = [1, 3, 7, 9];
    let cross = [2, 4, 6, 8];
    let center: any = board[1].find(square => square.id === 5);
    let symbolGameWinningMoves: string;
    let symbolUserWinningMoves: string;
    isUserFirst ? symbolGameWinningMoves = "O" : symbolGameWinningMoves = "X";
    isUserFirst ? symbolUserWinningMoves = "X" : symbolUserWinningMoves = "O";
    winningMoves.forEach((moves: any) => {
        moves[symbolGameWinningMoves].forEach((lines: any) => {
            if (lines.length === 1) {
                gameMove = lines[0];
                renderBoard(isUserFirst, board, gameMove);
                findWinningSquare(board, gameMove, dispatch);
                return;
            }
        })
    });
    winningMoves.forEach((moves: any) => {
        moves[symbolUserWinningMoves].forEach((lines: any) => {
            if (lines.length === 1) {
                gameMove = lines[0];
                renderBoard(isUserFirst, board, gameMove);
                findWinningSquare(board, gameMove, dispatch);
                return;
            }
        })
    });
    if (!center.value) {
        gameMove = 5;
        renderBoard(isUserFirst, board, gameMove);
        findWinningSquare(board, gameMove, dispatch);
        return;
    }
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
