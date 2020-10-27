import { Square, WinningMove } from "../../types";
import { setWinner, updateBoard } from './actions';

const findRowIndex = (gameMove: number) => {
    return gameMove <= 3 ? 0 : (gameMove > 3 && gameMove <= 6) ? 1 : 2;
};

const checkWinningMoves = (winningMoves: Array<WinningMove>, symbol: string, board: any) => {
    let foundMove: any = winningMoves.find((move: any) => move[symbol].length === 1 && !isSquareFull(board, move[symbol][0]));

    return foundMove ? foundMove[symbol][0] : 0;
};

const isSquareFull = (board: Array<Array<Square>>, squareIndex: number): boolean => {
    let rowIndex: number = findRowIndex(squareIndex);
    let square: Square = board[rowIndex][squareIndex - rowIndex * 3 - 1];

    return !!square.value;
}

export const generateGameMove = (isUserFirst: boolean, board: Array<Array<Square>>, winningMoves: Array<WinningMove>) => {
    return (dispatch: any) => {
        let diagonals = [1, 3, 7, 9];
        let cross = [2, 4, 6, 8];
        let symbolGameWinningMoves: string = isUserFirst ? "O" : "X";
        let symbolUserWinningMoves: string = isUserFirst ? "X" : "O";
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

        while(square.id) {
            const index: number = Math.floor(Math.random() * diagonals.length);
            square.id = diagonals[index];

            if (square.id && !isSquareFull(board, square.id)) {
                dispatch(updateBoard(square));
                return;
            } else {
                diagonals.splice(index, 1);
            }
        }

        square.id = 5;

        if (!isSquareFull(board, square.id)) {
            dispatch(updateBoard(square));
            return;
        }

        while(square.id) {
            const index: number = Math.floor(Math.random() * cross.length);
            square.id = cross[index];

            if (square.id && !isSquareFull(board, square.id)) {
                dispatch(updateBoard(square));
                return;
            } else {
                cross.splice(index, 1);
            }
        }

        dispatch(setWinner("Tie!"));
        return;
    }
};
