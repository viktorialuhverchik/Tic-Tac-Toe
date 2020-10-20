import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game/Game';
import ButtonsPanel from './components/ButtonsPanel/ButtonsPanel';

import './App.css';

const App: FC = () => {

    const isUserFirst: boolean = useSelector((state: any) => state.app.isXFirst);
    

    return (
        <div className="app">
            <header className="app-header">
                <h2 className="app-title">Tic-Tac-Toe</h2>
            </header>
            <h3 className="app-text">Choise your move:</h3>
            <ButtonsPanel />
            <Game isUserFirst={isUserFirst} />
        </div>
    );
}

export default App;
