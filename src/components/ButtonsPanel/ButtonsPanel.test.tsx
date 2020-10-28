import React from 'react';
import ButtonsPanel from './ButtonsPanel';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';

let userMoves: number[] = [1];

describe('ButtonsPanel component',() => {
    it('should render ButtonsPanel component', () => {
        const wrapper = renderWithRedux(<ButtonsPanel userMoves={userMoves} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click handle click X', () => {
        const { getByTestId } = renderWithRedux(<ButtonsPanel userMoves={userMoves}/>);
        fireEvent.click(getByTestId("X"));
        expect(getByTestId("X")).toBeTruthy();
    });

    it('click handle click O', () => {
        const { getByTestId } = renderWithRedux(<ButtonsPanel userMoves={userMoves}/>);
        fireEvent.click(getByTestId("O"));
        expect(getByTestId("O")).toBeTruthy();
    });
});
