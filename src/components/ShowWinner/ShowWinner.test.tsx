import React from 'react';
import ShowWinner from './ShowWinner';
import { renderWithRedux } from '../../index.test';

let winner: string = "";

describe('ShowWinner component',() => {
    it('should render ShowWinner component', () => {
        const wrapper = renderWithRedux(<ShowWinner winner={winner} />);
        expect(wrapper).toMatchSnapshot();
    });
});
