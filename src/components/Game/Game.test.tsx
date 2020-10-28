import React from 'react';
import Game from './Game';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';

let userMoves: number[] = [1];
let winner: string = "";

describe('Game component',() => {
    it('should render Game component', () => {
        const wrapper = renderWithRedux(<Game userMoves={userMoves} winner={winner} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click handle click square', () => {
        const { getByTestId } = renderWithRedux(<Game userMoves={userMoves} winner={winner} />);
        fireEvent.click(getByTestId("square 1"));
        expect(getByTestId("square 1")).toBeTruthy();
    });
});
