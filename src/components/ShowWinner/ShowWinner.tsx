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
                <h1 className="message-title">{winner}</h1>
                <button className="button-again" data-testid="again" onClick={() => dispatch(initGame())}>
                    <span className="button-title">Play again</span>
                </button>
            </div>
        </div>
    );

};

export default ShowWinner;
