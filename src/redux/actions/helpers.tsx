import { Square } from "../../types";
import { setWinner, updateBoard, updateWinningMoves } from './actions';

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
    let square: Square = {
        id: checkWinningMoves(winningMoves, symbolGameWinningMoves, board),
        value: symbolGameWinningMoves
    };

    if (square.id !== 0 && !isSquareFull(board, square.id)) {
        findWinningSquare(board, square.id, dispatch);
        dispatch(updateBoard(square));
        dispatch(updateWinningMoves(square));
        return;
    }
    
    square.id = checkWinningMoves(winningMoves, symbolUserWinningMoves, board);

    if (square.id !== 0 && !isSquareFull(board, square.id)) {
        findWinningSquare(board, square.id, dispatch);
        dispatch(updateBoard(square));
        dispatch(updateWinningMoves(square));
        return;
    }

    square.id = Infinity;

    while(square.id) {
        const index = Math.floor(Math.random() * diagonals.length);
        square.id = diagonals[index];

        if (square.id && !isSquareFull(board, square.id)) {
            findWinningSquare(board, square.id, dispatch);
            dispatch(updateBoard(square));
            dispatch(updateWinningMoves(square));
            return;
        } else {
            diagonals.splice(index, 1);
        }
    }

    square.id = 5;

    if (!isSquareFull(board, square.id)) {
        findWinningSquare(board, square.id, dispatch);
        dispatch(updateBoard(square));
        dispatch(updateWinningMoves(square));
        return;
    }

    while(square.id) {
        const index = Math.floor(Math.random() * cross.length);
        square.id = cross[index];

        if (square.id && !isSquareFull(board, square.id)) {
            findWinningSquare(board, square.id, dispatch);
            dispatch(updateBoard(square));
            dispatch(updateWinningMoves(square));
            return;
        } else {
            cross.splice(index, 1);
        }
    }

    checkWinner(winningMoves, dispatch);

    dispatch(setWinner("Tie"));
    return;
};

export const checkWinner = (winningMoves: any, dispatch: any) => {
    let xWin = winningMoves.find((move: any) => move["X"].length === 0);
    if(xWin) {
        return dispatch(setWinner("X"));
    }

    let oWin = winningMoves.find((move: any) => move["O"].length === 0);
    if(oWin) {
        return dispatch(setWinner("O"));
    }
};
