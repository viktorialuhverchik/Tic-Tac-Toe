import { Moves, Square, WinningMove } from "../../types";
import { setTie, updateBoard } from './actions';

export const copyUpdatedBoard = (board: Array<Array<Square>>, selectedSquare: Square) => {
    return board.map((row: Array<Square>) => row.map((square: Square) => {
        if (selectedSquare.id === square.id) {
            return Object.assign({}, selectedSquare);
        }
        return square;
    }));
};

export const copyUpdatedWinningMoves = (winningMoves: Array<WinningMove>, selectedSquare: Square) => {
    return winningMoves.map((moves: any) => {
        return Object.assign({}, moves, {
            [selectedSquare.value]: moves[selectedSquare.value].filter((move: number) => move !== selectedSquare.id)
        });
    });
};

export const getWinner = (winningMoves: Array<WinningMove>, value: string) => {
    let isFindWinner = winningMoves.find((move: any) => move[value].length === 0);
    if (isFindWinner) {
        return `${value} win!`;
    } else {
        return "";
    }
};

const findRowIndex = (gameMove: number) => {
    return gameMove <= 3 ? 0 : (gameMove > 3 && gameMove <= 6) ? 1 : 2;
};

const checkWinningMoves = (winningMoves: Array<WinningMove>, value: string, board: any) => {
    let foundMove: any = winningMoves.find((move: any) => move[value].length === 1 && !isSquareFull(board, move[value][0]));

    return foundMove ? foundMove[value][0] : 0;
};

const isSquareFull = (board: Array<Array<Square>>, squareIndex: number): boolean => {
    let rowIndex: number = findRowIndex(squareIndex);
    let square: Square = board[rowIndex][squareIndex - rowIndex * 3 - 1];

    return !!square.value;
};

const generateRandomDiagonalOrCross = (board: Array<Array<Square>>, square: Square, availableMoves: number[], dispatch: any) => {
    while(square.id) {
        const index: number = Math.floor(Math.random() * availableMoves.length);
        square.id = availableMoves[index];

        if (square.id && !isSquareFull(board, square.id)) {
            dispatch(updateBoard(square));
            return square.id;
        } else {
            availableMoves.splice(index, 1);
        }
    }
};

export const generateGameMove = (isUserFirst: boolean, board: Array<Array<Square>>, winningMoves: Array<WinningMove>) => {
    return (dispatch: any) => {
        let diagonals = [1, 3, 7, 9];
        let cross = [2, 4, 6, 8];
        let symbolGameWinningMoves: string = isUserFirst ? Moves.O : Moves.X;
        let symbolUserWinningMoves: string = isUserFirst ? Moves.X : Moves.O;
        let square: Square = {
            id: checkWinningMoves(winningMoves, symbolGameWinningMoves, board),
            value: symbolGameWinningMoves
        };

        if (square.id !== 0 && !isSquareFull(board, square.id)) {
            dispatch(updateBoard(square));
            return;
        }
        
        square.id = checkWinningMoves(winningMoves, symbolUserWinningMoves, board);

        if (square.id !== 0 && !isSquareFull(board, square.id)) {
            dispatch(updateBoard(square));
            return;
        }

        square.id = Infinity;

        if (generateRandomDiagonalOrCross(board, square, diagonals, dispatch)) return;

        square.id = 5;

        if (!isSquareFull(board, square.id)) {
            dispatch(updateBoard(square));
            return;
        }

        if (generateRandomDiagonalOrCross(board, square, cross, dispatch)) return;

        dispatch(setTie());
        return;
    }
};
