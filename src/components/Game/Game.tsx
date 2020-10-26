import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropsGame } from '../../types';
import { addUserMove, updateBoard, updateWinningMoves } from '../../redux/actions/actions';
import { checkWinner, generateGameMove } from '../../redux/actions/helpers';

import './Game.css';

const Game: FC<PropsGame> = ({ isUserFirst, winningMoves, board }) => {

    const dispatch: any = useDispatch();

    const handleClick = (clickedSquare: any) => {
        if (clickedSquare.value) return;

        const updatedSquare = Object.assign({}, clickedSquare, {
            value: isUserFirst ? "X" : "O"
        });

        dispatch(addUserMove(updatedSquare.id));
        dispatch(updateBoard(updatedSquare));
        dispatch(updateWinningMoves(updatedSquare));
        debugger;

        a();
    };

    const a = () => {
        dispatch(generateGameMove(isUserFirst, board, winningMoves, dispatch));

    }

    useEffect(() => {
        if(!isUserFirst) {
            generateGameMove(isUserFirst, board, winningMoves, dispatch);
        }
    },[isUserFirst]);

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
