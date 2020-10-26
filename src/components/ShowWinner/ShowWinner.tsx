import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { initGame } from '../../redux/actions/actions';
import { PropsShowWinner } from '../../types';

import './ShowWinner.css';

const ShowWinner: FC<PropsShowWinner> = ({  winner }) => {

    const dispatch: any = useDispatch();

    return (
        <div className="show-winner">
            <div className="message">
                {winner === "Tie" ? <h1 className="message-title">{winner}!</h1> : <h1 className="message-title">{winner} win!</h1>}
                <button className="button-again" onClick={() => dispatch(initGame())}>Play again</button>
            </div>
        </div>
    );

};

export default ShowWinner;
