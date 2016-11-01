import Immutable from 'seamless-immutable';
import { Action } from '../constants/Action';

export const initialState = Immutable({});

export function localeData(state = initialState, { type, payload }) {
    switch(type) {
        case Action.UPDATE_LOCALE_DATA_COMPLETE: {
            const { locale, rules, messages } = payload;
            return state.set(locale, {
                rules,
                messages
            });
        }
        default: {
            return state;
        }
    }
}