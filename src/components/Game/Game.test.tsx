import React from 'react';
import Game from './Game';
import { renderWithRedux } from '../../index.test';

let userMoves: number[] = [1];
let winner: string = "";

describe('Game component',() => {
    it('should render Game component', () => {
        const wrapper = renderWithRedux(<Game userMoves={userMoves} winner={winner} />);
        expect(wrapper).toMatchSnapshot();
    });
});
