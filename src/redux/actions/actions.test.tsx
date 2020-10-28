import * as actions from './actions';
import * as types from '../types';
import { Square } from '../../types';

describe('actions', () => {
    it('should create an toggle user first action', () => {
        let isUserFirst: boolean = true;
        const expectedAction = {
            type: types.TOGGLE_USER_FIRST,
            isUserFirst
        };
        expect(actions.toggleUserFirst(isUserFirst)).toEqual(expectedAction);
    });

    it('should create an add user move action', () => {
        let square: Square = {id: 2, value: "X"};
        const expectedAction = {
            type: types.USER_MOVE,
            square
        };
        expect(actions.addUserMove(square)).toEqual(expectedAction);
    });

    it('should create an add game move action', () => {
        let square: Square = {id: 1, value: "O"};
        const expectedAction = {
            type: types.USER_MOVE,
            square
        };
        expect(actions.addUserMove(square)).toEqual(expectedAction);
    });

    it('should create an update board action', () => {
        let square: Square = {id: 2, value: "X"};
        const expectedAction = {
            type: types.UPDATE_BOARD,
            square
        };
        expect(actions.updateBoard(square)).toEqual(expectedAction);
    });

    it('should create an set winner action', () => {
        let winner: string = "X";
        const expectedAction = {
            type: types.SET_WINNER,
            winner
        };
        expect(actions.setWinner(winner)).toEqual(expectedAction);
    });
});