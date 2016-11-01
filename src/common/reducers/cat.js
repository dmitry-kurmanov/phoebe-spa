import Immutable from 'seamless-immutable';
import { Action } from '../constants/Action';

export const initialState = Immutable({
    url : ''
});

export function cat(state = initialState, { type, payload }) {
    switch(type) {
        case Action.RANDOM_CAT_FETCH_DATA_COMPLETE: {
            return state.set('url', payload);
        }
        default: {
            return state;
        }
    }
}