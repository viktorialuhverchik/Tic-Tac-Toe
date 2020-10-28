import React from 'react';
import ShowWinner from './ShowWinner';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';

let winner: string = "";

describe('ShowWinner component',() => {
    it('should render ShowWinner component', () => {
        const wrapper = renderWithRedux(<ShowWinner winner={winner} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click handle click again', () => {
        const { getByTestId } = renderWithRedux(<ShowWinner winner={winner} />);
        fireEvent.click(getByTestId("again"));
        expect(getByTestId("again")).toBeTruthy();
    });
});
