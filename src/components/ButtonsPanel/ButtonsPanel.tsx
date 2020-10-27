import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserFirst } from '../../redux/actions/actions';
import { PropsButtons } from '../../types';

import './ButtonsPanel.css';

const ButtonsPanel: FC<PropsButtons> = ({  userMoves }) => {
    
    const [isClickedX, setIsClickedX] = useState<boolean>(true);
    const [isClickedO, setIsClickedO] = useState<boolean>(false);
    const dispatch: any = useDispatch();

    useEffect(() => {
        if (isClickedO) {
            setIsClickedX(false);
            dispatch(toggleUserFirst(false));
        }
    }, [isClickedO, dispatch]);

    useEffect(() => {
        if (isClickedX) {
            setIsClickedO(false);
            dispatch(toggleUserFirst(true));
        }
    }, [isClickedX, dispatch]);

    return (
        <div className="buttons-panel">
            <button
                className={
                    `button 
                    ${!isClickedX ? "" : "clicked"}
                    ${!userMoves.length ? "" : "blocked"}`
                }
                onClick={() => setIsClickedX(true)}
            >
                <span className="button-title">X</span>
            </button>
            <button
                className={
                    `button
                    ${!isClickedO ? "" : "clicked"}
                    ${!userMoves.length ? "" : "blocked"}`
                }
                onClick={() => setIsClickedO(true)}
            >
                <span className="button-title">O</span>
            </button>
        </div>
    );

};

export default ButtonsPanel;
