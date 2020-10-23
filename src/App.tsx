import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game/Game';
import ButtonsPanel from './components/ButtonsPanel/ButtonsPanel';
import { Square, State } from './types';

import './App.css';

const App: FC = () => {

    const isUserFirst: boolean = useSelector((state: any) => state.app.isUserFirst);
    const winningMoves: any = useSelector((state: State) => state.game.winningMoves);
    const board: Array<Array<Square>>  = useSelector((state: State) => state.game.board);
    const userMoves: number[] = useSelector((state: State) => state.game.userMoves);

    return (
        <div className="app">
            <header className="app-header">
                <h2 className="app-title">Tic-Tac-Toe</h2>
            </header>
            <h3 className="app-text">Choise your move:</h3>
            <ButtonsPanel userMoves={userMoves} />
            <Game isUserFirst={isUserFirst} winningMoves={winningMoves} board={board} userMoves={userMoves} />
        </div>
    );
}

export default App;
