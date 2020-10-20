import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserFirst } from '../../redux/actions/actions';

import './ButtonsPanel.css';

const ButtonsPanel: FC = () => {
    
    const dispatch: any = useDispatch();
    const [isClickedX, setIsClickedX] = useState<boolean>(true);
    const [isClickedO, setIsClickedO] = useState<boolean>(false);

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
                className={`button ${!isClickedX ? "" : "clicked"}`}
                onClick={() => setIsClickedX(true)}
            >
                <span className="button-title">X</span>
            </button>
            <button
                className={`button ${!isClickedO ? "" : "clicked"}`}
                onClick={() => setIsClickedO(true)}
            >
                <span className="button-title">O</span>
            </button>
        </div>
    );

};

export default ButtonsPanel;