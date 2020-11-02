import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Square, State, PropsGame, WinningMove, Moves } from '../../types';
import { addUserMove, initGame, setTie, updateBoard } from '../../redux/actions/actions';
import { generateGameMove } from '../../redux/actions/helpers';

import './Game.css';

const Game: FC<PropsGame> = ({ userMoves, winner }) => {

    const isUserFirst: boolean = useSelector((state: State) => state.app.isUserFirst);
    const winningMoves: Array<WinningMove> = useSelector((state: State) => state.game.winningMoves);
    const board: Array<Array<Square>>  = useSelector((state: State) => state.game.board);
    const dispatch: any = useDispatch();

    const handleClick = (clickedSquare: Square) => {
        if (clickedSquare.value) return;

        const updatedSquare = Object.assign({}, clickedSquare, {
            value: isUserFirst ? Moves.X : Moves.O
        });

        dispatch(addUserMove(updatedSquare));
        dispatch(updateBoard(updatedSquare));
    };

    useEffect(() => {
        dispatch(initGame());
    }, [isUserFirst]);

    useEffect(() => {
        if (winner) return;
        if (!isUserFirst || (isUserFirst && userMoves.length)) {
            dispatch(generateGameMove(isUserFirst, board, winningMoves));
        }
        if (!isUserFirst && userMoves.length === 4) {
            dispatch(setTie());
        }
    },[userMoves, isUserFirst]);

    return (
        <div className="game">
            <div className="game-board">
            {
                board.map((row) => row.map((square) => {
                    return (
                        <div
                            className={`board-square ${!winner ? "" : "blocked"}`}
                            key={square.id}
                            data-testid={`square ${square.id}`}
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
