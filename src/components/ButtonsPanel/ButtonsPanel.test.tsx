import React from 'react';
import ButtonsPanel from './ButtonsPanel';
import { renderWithRedux } from '../../index.test';

let userMoves: number[] = [1];

describe('ButtonsPanel component',() => {
    it('should render ButtonsPanel component', () => {
        const wrapper = renderWithRedux(<ButtonsPanel userMoves={userMoves}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
