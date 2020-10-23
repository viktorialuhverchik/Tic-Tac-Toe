import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropsGame } from '../../types';
import { addUserMove, updateBoard, updateWinningMoves } from '../../redux/actions/actions';
import { checkWinner, generateGameMove } from '../../redux/actions/helpers';

import './Game.css';

const Game: FC<PropsGame> = ({ isUserFirst, winningMoves, board, userMoves }) => {

    const dispatch: any = useDispatch();

    if(!isUserFirst && !userMoves.length) {
        generateGameMove(isUserFirst, board, winningMoves, dispatch);
    }

    const handleClick = (clickedSquare: any) => {
        dispatch(addUserMove(clickedSquare.id));
        let updatedBoard: any = board.map((row) => row.map((square) => {
            if (clickedSquare.id === square.id) {
                if (isUserFirst) {
                    if (!clickedSquare.value) {
                        clickedSquare.value = "X";
                    }
                } else {
                    if (!clickedSquare.value) {
                        clickedSquare.value = "O";
                    }
                }
            }
            return square;
        }));

        if (updatedBoard) {
            dispatch(updateWinningMoves(clickedSquare));
            dispatch(updateBoard(updatedBoard));
            generateGameMove(isUserFirst, board, winningMoves, dispatch);
        }
    };

    useEffect(() => {
        checkWinner(winningMoves);
    }, [winningMoves]);

    return (
        <div className="game">
            <div className="game-board">
            {
                board.map((row) => row.map((square) => {
                    return (
                        <div
                            className="board-square"
                            key={square.id}
                            onClick={() => handleClick(square)}
                        >
                            {square.value}
                        </div>
                    );
                }))
            }
            </div>
        </div>
    );

};

export default Game;
