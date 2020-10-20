import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropsGame } from '../../types';
import { State } from '../../types';

import './Game.css';
import { addUserMove, updateMoves } from '../../redux/actions/actions';

const Game: FC<PropsGame> = ({ isUserFirst }) => {

    const dispatch: any = useDispatch();
    const moves: number[] = useSelector((state: State) => state.game.moves);
    const userMoves: number[] = useSelector((state: State) => state.game.userMoves);
    const squares: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [symbol, setSymbol] = useState<string>("");

    const handleClick = (square: number) => {
        console.log(square);
        if (isUserFirst) {
            setSymbol("X")
        } else {
            setSymbol("O");
        }
        dispatch(addUserMove(square));
        dispatch(updateMoves(moves, square));
    };

    useEffect(() => {
    }, [userMoves]);

    return (
        <div className="game">
            <div className="game-board">
            {
                squares.map((square: number) => {
                    return (
                        <div
                            className="board-square"
                            id={`${square}`}
                            key={square}
                            onClick={() => handleClick(square)}
                        >
                        </div>
                    )
                })
            }
            </div>
        </div>
    );

};

export default Game;
