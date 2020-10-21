import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropsGame } from '../../types';
import { addUserMove, updateBoard } from '../../redux/actions/actions';

import './Game.css';

const Game: FC<PropsGame> = ({ isUserFirst, moves, userMoves }) => {

    const dispatch: any = useDispatch();
    const [board, setBoard] = useState([
        [
            {
                id: 1,
                value: ""
            },
            {
                id: 2,
                value: ""
            },
            {
                id: 3,
                value: ""
            }
        ],
        [
            {
                id: 4,
                value: ""
            },
            {
                id: 5,
                value: ""
            },
            {
                id: 6,
                value: ""
            }
        ],
        [
            {
                id: 7,
                value: ""
            },
            {
                id: 8,
                value: ""
            },
            {
                id: 9,
                value: ""
            }
        ]
    ]);

    const generateGameMove = () => {
        // let possibleMoves = board.map((row) => row.filter((square) => {
        //     if (!square.value) {
        //         return square.id;
        //     }
        // }));
        // let gameMove = possibleMoves.map((row) => row[Math.floor(Math.random() * possibleMoves.length)]);
        let gameMove = moves[Math.floor(Math.random() * moves.length)]
        board.map((row) => row.map((square) => {
            if (square.id === gameMove) {
                if (isUserFirst) {
                    square.value = "O";
                } else {
                    square.value = "X";
                }
            }
        }));
    };

    if(!isUserFirst) {
        generateGameMove();
    };

    const handleClick = (square: any) => {
        if (isUserFirst) {
            if (!square.value) {
                square.value = "X";
                dispatch(addUserMove(square.id));
            } else {
                return;
            }
        } else {
            if (!square.value) {
                square.value = "O";
            } else {
                return;
            }
        }
        // dispatch(updateBoard(board));
        setBoard([...board]);
        generateGameMove();
    };

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
